
exports.index = function(req,res){
	 res.render('home/index', { title: 'Grey Rally' });
}

exports.about = function(req,res){
	res.render('home/index',{
		title : 'About us'
	});
}