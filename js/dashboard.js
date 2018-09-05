

function showdesc(btn){
	var maindiv = $(btn).closest('div');
	maindiv.find('p').css('max-height','none');
	maindiv.find('#readless').removeClass('hidden');
	maindiv.find('#readmore').addClass('hidden');
	return false;
}

function hidedesc(btn){
	var maindiv = $(btn).closest('div');
	maindiv.find('p').css('max-height','39px');
	maindiv.find('#readless').addClass('hidden');
	maindiv.find('#readmore').removeClass('hidden');
	return false;
}

$(document).ready(function(){
	$('#delselected').click(function(){
		alert("test");
	});
});

function passId(rowid){
	$('#myModal .deletebtn').attr('id',rowid);
}

function deleteCat(catid){
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});

	$.ajax({
		url:'/repo/category/delete',
		type: 'post',
		data: {"cat_id":catid},
		dataType : 'json',
		success: function(response){
			if(response.msg=="success"){
				$('.categorycontent span').removeClass('hidden');
				$('.row-'+catid).hide();
			}
		}		
	});
}

function deleteRow(rowid){
	$.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

	$.ajax({
		url: '/repo/post/'+rowid,
		type: "post",
		dataType: 'json',
		success: function(response){
			if(response.msg== "success"){
				$('#myModal').modal('toggle');
				$('.container.content span').removeClass('hidden');
				$('.row-'+rowid).hide();
			}	
		}
	});

}

function changelabel(tag){
	$('.menuitems li').removeClass('active');
    $(tag).addClass('active');
}

