AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const Border = this.createBorder(position,item.id)
      
      // Thumbnail Element
      const Thumbnail = this.createThumbnail(item)
      Border.appendChild(Thumbnail)
     
      // Title Text Element
      const Title = this.createTitle(position,item)
      Border.appendChild(Title)
      
      this.placesContainer.appendChild(Border);
    }
  },
  createBorder:function(position,id){
    const Element = document.createElement("a-entity")

    Element.setAttribute("id",id)
    Element.setAttribute("visible",true)
    Element.setAttribute("geometry",{primitive:"ring",radiusInner:9,radiusOuter:10})
    Element.setAttribute("position",position)
    Element.setAttribute("material",{color:"#0b00d4",opacity:0.4})
    return Element

    
  },
  createThumbnail:function(item){
    const Element = document.createElement("a-entity")

    Element.setAttribute("visible",true)
    Element.setAttribute("geometry",{primitive:"circle",radius:9})
    Element.setAttribute("material",{src:item.url})
    return Element
  
},
createTitle:function(position,item){
  const Element = document.createElement("a-entity")
  const pos = position
  pos.y = -20
  Element.setAttribute("position",pos)
  Element.setAttribute("text",{font:"exo2bold",color:"red",width:150,align:"center",value:item.title,})
  Element.setAttribute("visible",true)
  return Element

}


}
);
