function getTasks(){
  this.item = [];

  var lista = localStorage.getItem("listacompras");

  if(lista !== null)
    this.item = angular.fromJson(lista);

  this.save = function(){
    var lista = angular.toJson(this.item)
    localStorage.setItem("listacompras",lista);
  }

  this.add = function(item){
      this.item.push(item);
  };

  this.remove = function(item){
    var pos = this.item.indexOf(item);
    this.item.splice(pos, 1);
  };
}
