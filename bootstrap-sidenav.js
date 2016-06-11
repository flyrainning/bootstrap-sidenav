/*
自动锚点导航
<div class="row">
	<div id="sidenav_bodys" class="col-md-9 col-lg-10 ">
	...
	</div>
	<div id="sidenavdiv" class="col-md-3 col-lg-2"></div>
</div>
      
<script>

$('#sidenavdiv').sidenav("sidenav_bodys");

</script>

自动处理sidenav_bodys中的h1-h6标签，生成导航
可用通过为h标签设置data-sidenav="xxx"来自定义标题
可为非h标签添加class="sidenav"来使用此标签

*/

;(function($, undefined) {
$.fn['sidenav'] = function(options) {
	if (typeof(options)=='string') options={
		bodyid:'#'+options
	};
	options = $.extend({
		bodyid:'#sidenav_body'
	},options);

	return this.each(function() {
		var css='<style>.bs-docs-sidebar.affix{position:static}@media (min-width:768px){.bs-docs-sidebar{padding-left:20px}}.bs-docs-sidenav{margin-top:20px;margin-bottom:20px}.bs-docs-sidebar .nav>li>a{display:block;padding:4px 20px;font-size:13px;font-weight:500;color:#767676}.bs-docs-sidebar .nav>li>a:focus,.bs-docs-sidebar .nav>li>a:hover{padding-left:19px;color:#563d7c;text-decoration:none;background-color:transparent;border-left:1px solid #563d7c}.bs-docs-sidebar .nav>.active:focus>a,.bs-docs-sidebar .nav>.active:hover>a,.bs-docs-sidebar .nav>.active>a{padding-left:18px;font-weight:700;color:#563d7c;background-color:transparent;border-left:2px solid #563d7c}.bs-docs-sidebar .nav .nav{display:none;padding-bottom:10px}.bs-docs-sidebar .nav .nav>li>a{padding-top:1px;padding-bottom:1px;padding-left:30px;font-size:12px;font-weight:400}.bs-docs-sidebar .nav .nav>li>a:focus,.bs-docs-sidebar .nav .nav>li>a:hover{padding-left:29px}.bs-docs-sidebar .nav .nav>.active:focus>a,.bs-docs-sidebar .nav .nav>.active:hover>a,.bs-docs-sidebar .nav .nav>.active>a{padding-left:28px;font-weight:500}.back-to-top,.bs-docs-theme-toggle{display:none;padding:4px 10px;margin-top:10px;margin-left:10px;font-size:12px;font-weight:500;color:#999}.back-to-top:hover,.bs-docs-theme-toggle:hover{color:#563d7c;text-decoration:none}.bs-docs-theme-toggle{margin-top:0}@media (min-width:768px){.back-to-top,.bs-docs-theme-toggle{display:block}}@media (min-width:992px){.bs-docs-sidebar .nav>.active>ul{display:block}.bs-docs-sidebar.affix,.bs-docs-sidebar.affix-bottom{width:213px}.bs-docs-sidebar.affix{position:fixed;top:20px}.bs-docs-sidebar.affix-bottom{position:absolute}.bs-docs-sidebar.affix .bs-docs-sidenav,.bs-docs-sidebar.affix-bottom .bs-docs-sidenav{margin-top:0;margin-bottom:0}}@media (min-width:1200px){.bs-docs-sidebar.affix,.bs-docs-sidebar.affix-bottom{width:263px}}.autosidenav,.sidenavtitle:focus {outline: none;}</style>';

		var sidenav_alllisthtml=css+'<nav class="bs-docs-sidebar hidden-print hidden-xs hidden-sm affix"><ul class="nav bs-docs-sidenav">';
		$(options.bodyid).addClass('autosidenav');
		$(options.bodyid+' h1,'+options.bodyid+' h2,'+options.bodyid+' h3,'+options.bodyid+' h4,'+options.bodyid+' h5,'+options.bodyid+' h6,'+options.bodyid+' .sidenav').each(function () {
			var t=$(this);
			t.addClass('sidenavtitle');
			var title=(t.data('sidenav'))?t.data('sidenav'):t.text();
			title=title.trim();
			var id=t.attr('id');
			if (!id){
				id=parseInt(new Date().getTime())+'_'+parseInt(Math.random()*10000000 + 10000000,10);
				t.attr('id',id);
			}
			sidenav_alllisthtml+='<li><a href="#'+id+'">'+title+'</a></li>';
		});
		sidenav_alllisthtml+='</ul><a class="back-to-top" href="'+options.bodyid+'">返回顶部</a></nav>';
		$(this).html(sidenav_alllisthtml);
		setTimeout(function(){
			$('body').scrollspy({
				target:".bs-docs-sidebar",
				offset:10,
				});
			$(".bs-docs-sidebar").affix({
				offset:{
					top:$(options.bodyid).offset().top+10,
					bottom:10
				}
			})
		},50);
	});
};
})(jQuery);
