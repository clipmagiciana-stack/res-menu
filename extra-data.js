import extraFiles from './extras.json';
const names=`Grilled lobster|ग्रिल्ड लॉबस्टर|Homard grillé|Langosta a la parrilla|Gegrillter Hummer|烤龙虾
Golden curry|गोल्डन करी|Curry doré|Curry dorado|Goldenes Curry|金黄咖喱
Vegetable curry|सब्ज़ी करी|Curry de légumes|Curry de verduras|Gemüsecurry|蔬菜咖喱
Chicken mushroom fettuccine|चिकन मशरूम पास्ता|Fettuccine poulet champignons|Fettuccine con pollo y setas|Hähnchen-Pilz-Fettuccine|鸡肉蘑菇宽面
Garlic cream mussels|गार्लिक क्रीम मसल्स|Moules à la crème d’ail|Mejillones a la crema de ajo|Muscheln in Knoblauchcreme|蒜香奶油贻贝
Crispy chicken bites|क्रिस्पी चिकन|Bouchées de poulet croustillantes|Bocados de pollo crujiente|Knusprige Hähnchenstücke|香脆鸡块
Vegetable spring rolls|वेज स्प्रिंग रोल|Rouleaux de printemps aux légumes|Rollitos de verduras|Gemüse-Frühlingsrollen|蔬菜春卷
Prawn curry|झींगा करी|Curry de crevettes|Curry de gambas|Garnelencurry|大虾咖喱
Seafood curry|सीफूड करी|Curry de fruits de mer|Curry de mariscos|Meeresfrüchte-Curry|海鲜咖喱
Crispy calamari|क्रिस्पी कैलामारी|Calamars croustillants|Calamares crujientes|Knusprige Calamari|香脆鱿鱼
Golden seafood gratin|गोल्डन सीफूड ग्रैटिन|Gratin de fruits de mer doré|Gratinado dorado de mariscos|Goldenes Meeresfrüchte-Gratin|金黄海鲜焗烤
Shrimp spring rolls|झींगा स्प्रिंग रोल|Rouleaux de printemps aux crevettes|Rollitos de gambas|Garnelen-Frühlingsrollen|鲜虾春卷
Braised lamb shank|ब्रेज़्ड लैम्ब शैंक|Souris d’agneau braisée|Jarrete de cordero estofado|Geschmorte Lammhaxe|慢炖羊膝
Cheeseburger|चीज़बर्गर|Burger au fromage|Hamburguesa con queso|Cheeseburger|芝士汉堡
Chicken in mushroom cream|मशरूम क्रीम चिकन|Poulet à la crème de champignons|Pollo a la crema de setas|Hähnchen in Pilzrahm|蘑菇奶油鸡肉
Club sandwich|क्लब सैंडविच|Club sandwich|Sándwich club|Club-Sandwich|总汇三明治
Crispy seafood platter|क्रिस्पी सीफूड प्लेटर|Plateau de fruits de mer croustillants|Plato de mariscos crujientes|Knusprige Meeresfrüchteplatte|香脆海鲜拼盘
Golden fries|गोल्डन फ्राइज़|Frites dorées|Patatas fritas|Goldene Pommes|金黄薯条
Grilled club sandwich|ग्रिल्ड क्लब सैंडविच|Club sandwich grillé|Sándwich club a la parrilla|Gegrilltes Club-Sandwich|烤总汇三明治
Grilled fish burger|ग्रिल्ड फिश बर्गर|Burger de poisson grillé|Hamburguesa de pescado|Gegrillter Fischburger|烤鱼汉堡
Grilled vegetable panini|वेज पनीनी|Panini aux légumes grillés|Panini de verduras|Gemüse-Panini|烤蔬菜帕尼尼
Herb-crusted roast|हर्ब रोस्ट|Rôti en croûte d’herbes|Asado con hierbas|Kräuterkrustenbraten|香草烤肉
Mixed appetiser platter|मिक्स स्टार्टर प्लेटर|Assortiment d’entrées|Surtido de aperitivos|Gemischte Vorspeisenplatte|前菜拼盘
Ribeye steak|रिबआई स्टेक|Entrecôte grillée|Entrecot|Ribeye-Steak|肉眼牛排
Seafood lasagna|सीफूड लज़ान्या|Lasagnes aux fruits de mer|Lasaña de mariscos|Meeresfrüchte-Lasagne|海鲜千层面
Seared tuna|सीयर्ड टूना|Thon saisi|Atún sellado|Gebratener Thunfisch|香煎金枪鱼
Vegetarian club sandwich|वेज क्लब सैंडविच|Club sandwich végétarien|Sándwich club vegetariano|Vegetarisches Club-Sandwich|素食总汇三明治
Chicken cheese panini|चिकन चीज़ पनीनी|Panini poulet fromage|Panini de pollo y queso|Hähnchen-Käse-Panini|鸡肉芝士帕尼尼
Grilled fish|ग्रिल्ड मछली|Poisson grillé|Pescado a la parrilla|Gegrillter Fisch|香烤鱼
Grilled prawns|ग्रिल्ड झींगे|Crevettes grillées|Gambas a la parrilla|Gegrillte Garnelen|香烤大虾
Smoked salmon panini|स्मोक्ड सैल्मन पनीनी|Panini au saumon fumé|Panini de salmón ahumado|Räucherlachs-Panini|烟熏三文鱼帕尼尼
Braised octopus|ब्रेज़्ड ऑक्टोपस|Poulpe braisé|Pulpo estofado|Geschmorter Oktopus|慢炖章鱼
Prawn platter|झींगा प्लेटर|Assiette de crevettes|Plato de gambas|Garnelenplatte|大虾拼盘
Peppercorn steak|पेपर स्टेक|Steak au poivre|Filete a la pimienta|Pfeffersteak|黑椒牛排
Chicken mushroom lasagna|चिकन मशरूम लज़ान्या|Lasagnes poulet champignons|Lasaña de pollo y setas|Hähnchen-Pilz-Lasagne|鸡肉蘑菇千层面
Creamy lamb tagliatelle|क्रीमी लैम्ब पास्ता|Tagliatelles crémeuses à l’agneau|Tagliatelle de cordero|Cremige Lamm-Tagliatelle|奶油羊肉宽面
Hawaiian pizza|हवाईयन पिज़्ज़ा|Pizza hawaïenne|Pizza hawaiana|Hawaii-Pizza|夏威夷披萨
Margherita pizza|मार्गरीटा पिज़्ज़ा|Pizza margherita|Pizza margarita|Margherita-Pizza|玛格丽特披萨
Seafood pasta|सीफूड पास्ता|Pâtes aux fruits de mer|Pasta con mariscos|Meeresfrüchte-Pasta|海鲜意面
Seafood pizza|सीफूड पिज़्ज़ा|Pizza aux fruits de mer|Pizza de mariscos|Meeresfrüchte-Pizza|海鲜披萨
Spaghetti|स्पेगेटी|Spaghettis|Espaguetis|Spaghetti|意大利细面
Vegetable spaghetti|वेज स्पेगेटी|Spaghettis aux légumes|Espaguetis con verduras|Gemüsespaghetti|蔬菜意面
Fish curry|फिश करी|Curry de poisson|Curry de pescado|Fischcurry|鱼咖喱
Crispy chicken burger|क्रिस्पी चिकन बर्गर|Burger de poulet croustillant|Hamburguesa de pollo crujiente|Knuspriger Hähnchenburger|香脆鸡肉汉堡
Paneer curry|पनीर करी|Curry de paneer|Curry de paneer|Paneer-Curry|印度奶酪咖喱
Butter chicken|बटर चिकन|Poulet au beurre|Pollo a la mantequilla|Butterhähnchen|黄油鸡`.split('\n').map(r=>r.split('|'));
const descriptions={
starters:['A crisp, savoury start, served with a dipping sauce.','कुरकुरा और स्वादिष्ट, डिप के साथ परोसा जाता है।','Une entrée croustillante et savoureuse, avec sa sauce.','Un entrante crujiente y sabroso con salsa.','Knuspriger, herzhafter Auftakt mit Dip.','香脆鲜美的开胃菜，搭配蘸酱。'],
mains:['A generous plate, with vegetables and a delicious house accompaniment.','सब्ज़ियों और स्वादिष्ट साइड के साथ भरपूर भोजन।','Une assiette généreuse, légumes et accompagnement maison.','Un plato generoso con verduras y guarnición de la casa.','Ein großzügiger Teller mit Gemüse und Hausbeilage.','丰盛主菜搭配蔬菜与特色配菜。'],
pasta:['Comforting pasta with a rich sauce and a fresh herb finish.','स्वादिष्ट सॉस और ताज़ी जड़ी-बूटियों वाला पास्ता।','Des pâtes gourmandes, une sauce riche et des herbes fraîches.','Pasta con una salsa rica y hierbas frescas.','Wohltuende Pasta mit kräftiger Sauce und frischen Kräutern.','浓郁酱汁意面，点缀新鲜香草。'],
breads:['Toasted, golden and generously filled. Served with a side.','सुनहरा टोस्ट, भरपूर भरावन और साइड के साथ।','Doré et généreusement garni, avec un accompagnement.','Dorado y bien relleno, con guarnición.','Goldbraun und reichlich belegt, mit Beilage.','金黄烤制，馅料丰富，搭配配菜。'],
creole:['Slow-cooked island spices, served with fragrant rice.','धीमी आँच पर पके द्वीप के मसाले, चावल के साथ।','Épices des îles mijotées, servies avec du riz parfumé.','Especias isleñas a fuego lento con arroz aromático.','Langsam gegarte Inselgewürze mit duftendem Reis.','海岛香料慢炖，搭配芳香米饭。'],
combos:['A generous sharing platter with a selection of house favourites.','पसंदीदा व्यंजनों का भरपूर शेयरिंग प्लेटर।','Un généreux plateau à partager de spécialités maison.','Una tabla generosa para compartir con favoritos de la casa.','Eine großzügige Platte mit Hausspezialitäten zum Teilen.','丰盛分享拼盘，汇集餐厅特色。']};
export const extras=extraFiles.map((f,i)=>{const category=/Platter/.test(f)&&/Mixed|Crispy Seafood/.test(f)?'combos':/Curry|Octopus|Moody Gourmet/.test(f)?'creole':/Pasta|Spaghetti|Lasagna|Tagliatelle|Fettuccine/.test(f)?'pasta':/Burger|Sandwich|Panini|Pizza/.test(f)?'breads':/Bites|Spring Rolls|Calamari|Golden Seafood|Fries with Ketchup/.test(f)?'starters':'mains';const veg=/Vegetable|Vegetarian|Margherita|Paneer|Fries with Ketchup/.test(f);return {id:i+12,name:f.slice(0,-4),names:names[i],descriptions:descriptions[category],price:500+((i*35+25)%201),portion:category==='breads'?'1 pc':'350g',category,veg,vegan:/Vegetable Spring|Fries with Ketchup/.test(f),noAllium:false,model:null}});
