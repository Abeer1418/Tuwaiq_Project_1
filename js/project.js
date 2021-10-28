
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