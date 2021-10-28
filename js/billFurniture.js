function loadData(){
    $.ajax({
        url: 'productData.json',
        success: function(response){
            for(let i=0; i<response.length;i++){
                $("#allData").append(`
                <div class="col-md-4 mt-3">
                    <div class="card">
                        <div class="card-header">${response[i].name}</div>
                        <div class="card-body">
                            <img src="${response[i].imgUr}"class="img-fluid" style="max-height:100px"
                        </div>
                        <div class="card-footer">
                                    <span class="badge badge-
                                    secondary">${response[i].price}$</span>
                                    <button onclick="addToCar"class="btn btn-sm float-right btn-info">Add to cart+</button>
                        </div>
                `)
        },
    })
}
loadData();
            