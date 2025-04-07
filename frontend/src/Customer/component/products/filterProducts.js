export  const filters = [
   {
    id:"color",
    name:"Color",
    options:[
      {value:"white",label:"White"},
      {value:"black",label:"Black"},
      {value:"gray",label:"Gray"},
      {value:"red",label:"Red"},
      {value:"blue",label:"Blue"},
      {value:"green",label:"Green"},
      {value:"yellow",label:"Yellow"},
      {value:"purple",label:"Purple"},
    ],
   },
    {
     id:"size",
     name:"Size",
     options:[
        {value:"S",label:"S"},
        {value:"M",label:"M"},
        {value:"L",label:"L"},
     ],
    },
]

export const singleFilter = [
    {
      id:"price",
      name:"Price",
        options:[
            {value:"159-399",label:" ₹159 to ₹399"},
            {value:"400-999",label:" ₹400 to ₹999"},
            {value:"1000- 1999",label:" ₹1000 to ₹1999"},
            {value:"2000- 2999",label:" ₹2000 to ₹2999"},
            {value:"3000- 3999",label:" ₹3000 to ₹3999"},
        ],  
    },
    {
       id:"discount",
       name:"Discount Range",
       options:[
        {value:"10",label:" 0% And Above "},
        {value:"20",label:" 10% And Above "},
        {value:"30",label:" 20% And Above "},
        {value:"40",label:" 30% And Above "},
        {value:"50",label:" 40% And Above "},
        {value:"60",label:" 50% And Above "},
        {value:"70",label:" 60% And Above "},
       ],  
    },
    {
        id:"stock",
        name:"Availability",
        options:[
            {value:"inStock",label:"In Stock"},
            {value:"outOfStock",label:"Out Of Stock"},
        ],
    }
]
