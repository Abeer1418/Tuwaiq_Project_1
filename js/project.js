
function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#Pajamas').click(function(){
    let name = 'Pajamas';
    let qty = parseInt($('#Pajamas-qt').text());; //$('#qty').val();
    let price = 56;//$('#price').val();
    let newItem = new Item(name, qty, price);
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if(selectedItems == null )
    {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else
    {
        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})

function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#Baby').click(function(){
    let name = 'Baby';
    let qty = parseInt($('#Baby-qt').text());; //$('#qty').val();
    let price = 56;//$('#price').val();
    let newItem = new Item(name, qty, price);
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if(selectedItems == null )
    {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else
    {
        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})

function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#Girls').click(function(){
    let name = 'Girls';
    let qty = parseInt($('#Girls-qt').text());; //$('#qty').val();
    let price = 32;//$('#price').val();
    let newItem = new Item(name, qty, price);
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if(selectedItems == null )
    {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else
    {
        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})

function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#Cute').click(function(){
    let name = 'Cute';
    let qty = parseInt($('#Cute-qt').text());; //$('#qty').val();
    let price = 90;//$('#price').val();
    let newItem = new Item(name, qty, price);
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if(selectedItems == null )
    {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else
    {
        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})

function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#soft').click(function(){
    let name = 'soft';
    let qty = parseInt($('#soft-qt').text());; //$('#qty').val();
    let price = 144;//$('#price').val();
    let newItem = new Item(name, qty, price);
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if(selectedItems == null )
    {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else
    {
        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})
$('#Pajamas').click(()=>{
    let quantity = parseInt($('#Pajamas').text());
    if(quantity >1){
        $('#Pajamas-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#Pajamas').click(()=>{
    let quantity = parseInt($('#Pajamas-qt').text());
    console.log(quantity);
    $('#Pajamas-qt').text(++quantity)
})






$('#Baby').click(()=>{
    let quantity = parseInt($('#Baby').text());
    if(quantity >1){
        $('#Baby-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#Baby').click(()=>{
    let quantity = parseInt($('#Baby-qt').text());
    console.log(quantity);
    $('#Baby-qt').text(++quantity)
})





$('#Girls').click(()=>{
    let quantity = parseInt($('#Girls').text());
    if(quantity >1){
        $('#Girls-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#Girls').click(()=>{
    let quantity = parseInt($('#Girls-qt').text());
    console.log(quantity);
    $('#Girls-qt').text(++quantity)
})




$('#Cute').click(()=>{
    let quantity = parseInt($('#Cute').text());
    if(quantity >1){
        $('#Cute-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#Cute').click(()=>{
    let quantity = parseInt($('#Cute-qt').text());
    console.log(quantity);
    $('#Cute-qt').text(++quantity)
})






$('#soft').click(()=>{
    let quantity = parseInt($('#soft').text());
    if(quantity >1){
        $('#soft-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#soft').click(()=>{
    let quantity = parseInt($('#soft-qt').text());
    console.log(quantity);
    $('#soft-qt').text(++quantity)
})



function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#babySleepingBed').click(function(){
    let name = 'babySleepingBed';
    let qty = parseInt($('#babySleepingBed-qt').text());; //$('#qty').val();
    let price = 56;//$('#price').val();
    let newItem = new Item(name, qty, price);
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if(selectedItems == null )
    {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else
    {
        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})



function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#safeBedEdge').click(function(){
    let name = 'safeBedEdge';
    let qty = parseInt($('#safeBedEdge-qt').text());; //$('#qty').val();
    let price = 56;//$('#price').val();
    let newItem = new Item(name, qty, price);
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if(selectedItems == null )
    {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else
    {
        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})




function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#BabyRocking').click(function(){
    let name = 'BabyRocking';
    let qty = parseInt($('#BabyRocking-qt').text());; //$('#qty').val();
    let price = 56;//$('#price').val();
    let newItem = new Item(name, qty, price);
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if(selectedItems == null )
    {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else
    {
        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})




function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#woodenBed').click(function(){
    let name = 'woodenBed';
    let qty = parseInt($('#woodenBed-qt').text());; //$('#qty').val();
    let price = 56;//$('#price').val();
    let newItem = new Item(name, qty, price);
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if(selectedItems == null )
    {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else
    {
        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})




function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#Drawers').click(function(){
    let name = 'Drawers';
    let qty = parseInt($('#Drawers-qt').text());; //$('#qty').val();
    let price = 56;//$('#price').val();
    let newItem = new Item(name, qty, price);
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if(selectedItems == null )
    {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else
    {
        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})




function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#babyBag').click(function(){
    let name = 'babyBag';
    let qty = parseInt($('#babyBag-qt').text());; //$('#qty').val();
    let price = 56;//$('#price').val();
    let newItem = new Item(name, qty, price);
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if(selectedItems == null )
    {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else
    {
        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})




$('#babySleepingBed').click(()=>{
    let quantity = parseInt($('#babySleepingBed').text());
    if(quantity >1){
        $('#babySleepingBed-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#babySleepingBed').click(()=>{
    let quantity = parseInt($('#babySleepingBed-qt').text());
    console.log(quantity);
    $('#babySleepingBed-qt').text(++quantity)
})




$('#safeBedEdge').click(()=>{
    let quantity = parseInt($('#safeBedEdge').text());
    if(quantity >1){
        $('#safeBedEdge-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#safeBedEdge').click(()=>{
    let quantity = parseInt($('#safeBedEdge-qt').text());
    console.log(quantity);
    $('#safeBedEdge-qt').text(++quantity)
})






$('#BabyRocking').click(()=>{
    let quantity = parseInt($('#BabyRocking').text());
    if(quantity >1){
        $('#BabyRocking-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#BabyRocking').click(()=>{
    let quantity = parseInt($('#BabyRocking-qt').text());
    console.log(quantity);
    $('#BabyRocking-qt').text(++quantity)
})






$('#"woodenBed').click(()=>{
    let quantity = parseInt($('#"woodenBed').text());
    if(quantity >1){
        $('#"woodenBed-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#"woodenBed').click(()=>{
    let quantity = parseInt($('#"woodenBed-qt').text());
    console.log(quantity);
    $('#"woodenBed-qt').text(++quantity)
})




$('#Drawers').click(()=>{
    let quantity = parseInt($('#Drawers').text());
    if(quantity >1){
        $('#Drawers-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#Drawers').click(()=>{
    let quantity = parseInt($('#Drawers-qt').text());
    console.log(quantity);
    $('#Drawers-qt').text(++quantity)
})




$('#babyBag').click(()=>{
    let quantity = parseInt($('#babyBag').text());
    if(quantity >1){
        $('#babyBag-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#babyBag').click(()=>{
    let quantity = parseInt($('#babyBag-qt').text());
    console.log(quantity);
    $('#babyBag-qt').text(++quantity)
})


















function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#electricBike').click(function(){
    let name = 'electricBike';
    let qty = parseInt($('#electricBike-qt').text());; //$('#qty').val();
    let price = 56;//$('#price').val();
    let newItem = new Item(name, qty, price);
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if(selectedItems == null )
    {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else
    {
        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})



function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#PiecePolka').click(function(){
    let name = 'PiecePolka';
    let qty = parseInt($('#PiecePolka-qt').text());; //$('#qty').val();
    let price = 56;//$('#price').val();
    let newItem = new Item(name, qty, price);
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if(selectedItems == null )
    {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else
    {
        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})


function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#Multipurpose').click(function(){
    let name = 'Multipurpose';
    let qty = parseInt($('#Multipurpose-qt').text());; //$('#qty').val();
    let price = 56;//$('#price').val();
    let newItem = new Item(name, qty, price);
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if(selectedItems == null )
    {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else
    {
        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})






function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#Children').click(function(){
    let name = 'Children';
    let qty = parseInt($('#Children-qt').text());; //$('#qty').val();
    let price = 56;//$('#price').val();
    let newItem = new Item(name, qty, price);
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if(selectedItems == null )
    {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else
    {
        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})








function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#Unspecified').click(function(){
    let name = 'Unspecified';
    let qty = parseInt($('#Unspecified-qt').text());; //$('#qty').val();
    let price = 56;//$('#price').val();
    let newItem = new Item(name, qty, price);
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if(selectedItems == null )
    {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else
    {
        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})






function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#SmallDesign').click(function(){
    let name = 'SmallDesign';
    let qty = parseInt($('#SmallDesign-qt').text());; //$('#qty').val();
    let price = 56;//$('#price').val();
    let newItem = new Item(name, qty, price);
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if(selectedItems == null )
    {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else
    {
        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})








$('#electricBike').click(()=>{
    let quantity = parseInt($('#electricBike').text());
    if(quantity >1){
        $('#electricBike-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#electricBike').click(()=>{
    let quantity = parseInt($('#electricBike-qt').text());
    console.log(quantity);
    $('#electricBike-qt').text(++quantity)
})





$('#PiecePolka').click(()=>{
    let quantity = parseInt($('#PiecePolka').text());
    if(quantity >1){
        $('#PiecePolka-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#PiecePolka').click(()=>{
    let quantity = parseInt($('#PiecePolka-qt').text());
    console.log(quantity);
    $('#PiecePolka-qt').text(++quantity)
})






$('#Multipurpose').click(()=>{
    let quantity = parseInt($('#Multipurpose').text());
    if(quantity >1){
        $('#Multipurpose-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#Multipurpose').click(()=>{
    let quantity = parseInt($('#Multipurpose-qt').text());
    console.log(quantity);
    $('#Multipurpose-qt').text(++quantity)
})






$('#Children').click(()=>{
    let quantity = parseInt($('#Children').text());
    if(quantity >1){
        $('#Children-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#Children').click(()=>{
    let quantity = parseInt($('#Children-qt').text());
    console.log(quantity);
    $('#Children-qt').text(++quantity)
})





$('#Unspecified').click(()=>{
    let quantity = parseInt($('#Unspecified').text());
    if(quantity >1){
        $('#Unspecified-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#Unspecified').click(()=>{
    let quantity = parseInt($('#Unspecified-qt').text());
    console.log(quantity);
    $('#Unspecified-qt').text(++quantity)
})





$('#SmallDesign').click(()=>{
    let quantity = parseInt($('#SmallDesign').text());
    if(quantity >1){
        $('#SmallDesign-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#SmallDesign').click(()=>{
    let quantity = parseInt($('#SmallDesign-qt').text());
    console.log(quantity);
    $('#SmallDesign-qt').text(++quantity)
})
