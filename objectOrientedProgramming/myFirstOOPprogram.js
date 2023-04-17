// create your classes here
class apartment {
  twoRoom() {
    console.log("Is a two room shared apartment, where one is mine");
  }
}

class bedRoom extends apartment {
  twoRoom() {
    super.twoRoom();
    console.log(
      "it consitis of single bed, wardobe, computer table, lamp, sofa, bin, carpet, ectera "
    );
  }
}

class computerTable extends apartment {
  twoRoom() {
    console.log(
      "my computer table has montion, keyborad, mouse, headphone, laptop, router, waterbottle, notebook, pen, ectera"
    );
  }
}
var myRoom = new bedRoom();
var myComputerTable = new computerTable();

myRoom.twoRoom();
myComputerTable.twoRoom();
