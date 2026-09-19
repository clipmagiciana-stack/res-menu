# Lagon V2 — orders, cashier and kitchen

V2 is separate from the original `menu-app`. The frontend runs on GitHub Pages. Supabase saves and shares orders between devices. No local server is needed at the restaurant after deployment.

## Backend

This copy is configured for project `xthzafbebecejbshoyop`. Its public URL and publishable key are in `public/config.js`. Those settings are intended to be public. Never put a database password, secret key, service-role key or staff password in this project.

The database setup has been applied to the connected project. For a new project, run `backend/schema.sql` followed by `backend/seed-menu.sql` in Supabase → SQL Editor. Change `public/config.js`, then rebuild the upload package.

## Create staff accounts

1. In Supabase, open **Authentication → Users → Add user → Create new user**.
2. Create one account for the cashier and one for the kitchen. Choose the passwords yourself and enable **Auto Confirm User**. Do not share passwords in chat or commit them to GitHub.
3. Assign roles in SQL Editor, replacing the example email addresses with the exact accounts you created:

```sql
insert into public.staff_members(user_id,role,display_name)
select id,'cashier','Cashier' from auth.users where email='cashier@example.com'
on conflict(user_id) do update set role=excluded.role,display_name=excluded.display_name;

insert into public.staff_members(user_id,role,display_name)
select id,'kitchen','Kitchen' from auth.users where email='kitchen@example.com'
on conflict(user_id) do update set role=excluded.role,display_name=excluded.display_name;

select s.display_name,s.role,u.email
from public.staff_members s join auth.users u on u.id=s.user_id;
```

An owner account can have role `admin` to open either screen. A normal registered account has no staff access until assigned a role. There is no customer sign-in or staff sign-up form in the website.

## Upload to GitHub Pages

Use the **files inside `github-upload`**, or extract `Lagon-V2-GitHub-Upload.zip`. This folder contains the finished website, including images and 3D models. Every file goes into the repository root; there are no subfolders to preserve.

1. Create a separate repository such as `lagon-v2` so your existing website remains intact.
2. **Add file → Upload files**. Drag the extracted files into the upload area. If GitHub limits the number of files, upload them in two batches. Upload the files themselves, not the ZIP or its containing folder.
3. Commit the upload to `main`.
4. **Settings → Pages → Deploy from a branch → main → /(root) → Save**.
5. After deployment succeeds, use the URL displayed by GitHub. Keep the trailing `/`.

If your repository is `lagon-v2`, the addresses are:

- Customer menu: `https://clipmagiciana-stack.github.io/lagon-v2/`
- Cashier: `https://clipmagiciana-stack.github.io/lagon-v2/?screen=cashier`
- Kitchen: `https://clipmagiciana-stack.github.io/lagon-v2/?screen=kitchen`

These are expected addresses, not a claim that V2 has already been uploaded. The same package works under any repository name.

## Restaurant workflow

1. Customer adds dishes, opens the cart, presses **Checkout**, enters their name and chooses their table, then **Place order**.
2. Only a confirmed response from Supabase shows an order number. A failed connection retains the same request reference, so retrying will not create a duplicate.
3. Cashier sees the new order and presses **Accept order**. The kitchen sees all active orders and waits for acceptance before preparing them.
4. Kitchen presses **Start preparing**, then **Mark ready**.
5. Cashier presses **Mark served / complete**. Payment is handled at the counter; this app does not collect online payments.

The cashier and kitchen should remain signed in on their own devices. If one person uses both screens in the same browser, use an `admin` account, or separate browser profiles for separate logins.

Click **Enable sound & notifications** on each staff screen once. Allow browser notifications when prompted. On-screen alerts work without that permission. Keep the dashboard open and the computer awake: this version does not send push alerts after the browser is closed. Realtime updates are backed by a 10-second refresh and refresh when a hidden tab becomes visible. Reconnecting reloads saved orders.

## Tables, prices and availability

The existing menu has **58 dishes**, **12 3D models**, and **82 images**. Only dishes with supplied models show the 3D button. Tables 1–20 are initially enabled.

Edit `dining_tables` in the Supabase Table Editor to change labels, add tables, or turn off unused ones. For example:

```sql
update public.dining_tables set active=false where id>12;
```

Edit `menu_items.price` or `available` to update order prices or stop orders for an item. Prices are loaded from Supabase into the menu and checked again by the server at submission. Photos, descriptions, translations and dietary labels remain in the website files; adding a new dish requires updating both website data and the database menu.

Tax defaults to **0**. Confirm the restaurant's required display/pricing before changing `restaurant_settings.tax_rate`. For example, `0.10` adds 10% to the subtotal. Do not add tax again if your menu prices already include it. Set `accepting_orders=false` to pause new orders.

Orders retain their original names, prices and table labels after later menu edits. Staff cannot edit prices from the order desk. The dashboard shows all active orders plus the most recent 100 completed/cancelled orders from the last 24 hours. Older orders remain in Supabase.

## Development and verification

```text
npm install
npm run dev -- --port 5175
npm test
npm run build:pages
```

`npm test` exercises the actual SQL in an isolated PostgreSQL-compatible database: server pricing, validation, retry deduplication, row security and staff workflow. It does not change your live Supabase project.

After code changes, rebuild and upload the full contents of `github-upload`. If only the public connection settings change, update both `public/config.js` and the uploaded `config.js`.

This is a first ordering version: it has no payment gateway, receipt-printer integration, customer SMS, or closed-browser push service. Before customer use, test one complete order using a customer phone and the two signed-in staff screens. Use the live Supabase usage dashboard to monitor storage and service limits; hosting plan costs depend on your selected plan and usage.
