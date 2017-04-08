var allCoders=["Fiorella Quispe","Lourdes Vilchez","Rossmery Maldonado","Yessenia Huaman","Miriam Mendoza","Elizabeth Condori",
"Arantza Burga","Grecia Rayme","Janine Vega","Rosario Felix","Daguiana Revoredo","Jenny Velasquez","Nadia Cuadros",
"Michell More","Marilu Llamocca","Mariel Garcia","Fiorella Cisneros","Geraldine Chauca","Yellitza Rivera","Stephanie Hiyagon",
"Emma Tapia","Danna Franco","Flor Retamozo","Nathaly Pacheco","Ericka Vidal","Katherine Ortega","Brilly Majuan","Flor Tello",
"Leslie Avendaño","Cindy Mendoza","Annia Flores","Betsi Loayza","Aida Sulca","Milagros Gutierrez","Nakarid Jave","Angie Condor",
"Maia Rojas","Ariadna Cabana","Flor Condori","Mitch Rodriguez","Naomi Villanueva","Mary Castillo","Miriam Peralta",
"Karin Alejo","Liliana Peña","Ruth Salvador","Maribel","Wendy Reyes","Cinthia","Grecia Cutipa","Ana Durand",
"Glisse Jorge","Neiza Nuñez","Sandra Solorzano"];

function Coders(coder){
  this.allCoders=coder;
  this.addCoders=function(name){
    this.allCoders.push(name);
  }
}
var coder=new Coders(allCoders);
//Si deseamos añadir mas coder: ejecutar lo sgt:
// coder.addCoders("Fiorela Cisneros");
// coder.addCoders("Lulu");
