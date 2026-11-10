// Camera preview does not depend on an immersive WebXR session.
export async function openCameraPreview(source) {
  if (!source || document.querySelector('[data-camera-preview]')) return;
  const panel = document.createElement('div');
  panel.dataset.cameraPreview = '';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'Camera dish preview');
  panel.style.cssText = 'position:fixed;inset:0;z-index:10000;background:#111;color:white;touch-action:none';
  panel.innerHTML = `<video autoplay muted playsinline style="position:absolute;width:100%;height:100%;object-fit:cover"></video>
    <model-viewer camera-controls touch-action="none" disable-pan shadow-intensity="0" style="position:absolute;width:100%;height:100%;background:transparent" min-camera-orbit="auto auto 15%" max-camera-orbit="auto auto 400%"></model-viewer>
    <button type="button" aria-label="Close camera" style="position:absolute;right:16px;top:max(16px,env(safe-area-inset-top));font-size:28px;border:0;border-radius:50%;width:48px;height:48px;background:#222c;color:white">×</button>
    <div style="position:absolute;bottom:max(24px,env(safe-area-inset-bottom));left:16px;right:16px;text-align:center;background:#111c;padding:12px;border-radius:16px;font:16px system-ui">
      <p role="status" style="margin:0 0 10px">Opening camera…</p>
      <div style="display:flex;gap:12px;justify-content:center"><button type="button" aria-label="Make model smaller">−</button><button type="button">Reset</button><button type="button" aria-label="Make model larger">+</button><button type="button">Place on table</button></div>
    </div>`;
  const video = panel.querySelector('video');
  const model = panel.querySelector('model-viewer');
  const status = panel.querySelector('[role="status"]');
  const [closeButton, smaller, reset, larger, place] = panel.querySelectorAll('button');
  for (const button of [smaller, reset, larger, place]) button.style.cssText = 'min-height:44px;min-width:44px;padding:8px;border:0;border-radius:8px;background:white;color:#111;font:inherit';
  model.src = source.src;
  model.alt = source.alt;
  model.exposure = source.exposure;
  let stream;
  let closed = false;
  let initialOrbit;
  function close() {
    closed = true;
    stream?.getTracks().forEach(track => track.stop());
    video.srcObject = null;
    panel.remove();
    document.removeEventListener('keydown', onKey, true);
    window.removeEventListener('pagehide', close);
    source.focus();
  }
  function onKey(event) {
    if (event.key === 'Escape') { event.preventDefault(); event.stopImmediatePropagation(); close(); }
    if (event.key === 'Tab') {
      const buttons = [...panel.querySelectorAll('button')].filter(button => !button.hidden);
      if (event.shiftKey && document.activeElement === buttons[0]) { event.preventDefault(); buttons.at(-1).focus(); }
      else if (!event.shiftKey && document.activeElement === buttons.at(-1)) { event.preventDefault(); buttons[0].focus(); }
      event.stopImmediatePropagation();
    }
  }
  model.addEventListener('load', () => { initialOrbit = model.getCameraOrbit(); });
  model.addEventListener('error', () => { status.textContent = 'The dish could not load. Close and try another dish.'; });
  function zoom(factor) {
    const orbit = model.getCameraOrbit();
    model.cameraOrbit = `${orbit.theta}rad ${orbit.phi}rad ${orbit.radius * factor}m`;
  }
  smaller.onclick = () => zoom(1.2);
  larger.onclick = () => zoom(1 / 1.2);
  reset.onclick = () => {
    if (initialOrbit) model.cameraOrbit = `${initialOrbit.theta}rad ${initialOrbit.phi}rad ${initialOrbit.radius}m`;
  };
  closeButton.onclick = close;
  place.hidden = !source.canActivateAR;
  place.onclick = () => {
    close();
    source.arScale = 'auto';
    source.activateAR().catch(() => openCameraPreview(source));
  };
  document.body.append(panel);
  closeButton.focus();
  document.addEventListener('keydown', onKey, true);
  window.addEventListener('pagehide', close);
  try {
    if (!navigator.mediaDevices?.getUserMedia) throw new Error('unsupported');
    stream = await navigator.mediaDevices.getUserMedia({video: {facingMode: {ideal: 'environment'}}, audio: false});
    if (closed) { stream.getTracks().forEach(track => track.stop()); return; }
    video.srcObject = stream;
    await video.play();
    if (!closed) status.textContent = 'Camera preview · Pinch to resize · Drag to rotate';
  } catch (error) {
    if (closed) return;
    stream?.getTracks().forEach(track => track.stop());
    status.textContent = error.name === 'NotAllowedError'
      ? 'Camera permission is blocked. Allow camera access in your browser’s site settings, then reopen this view.'
      : 'Camera unavailable. Open this menu in Chrome or Safari and try again. You can still resize the 3D dish.';
  }
}
