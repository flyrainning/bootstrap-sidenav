# bootstrap-sidenav
仿bootstrap官网右侧锚点导航的插件，能根据h标签自动生成导航


```
<div class="row">
	<div id="sidenav_bodys" class="col-md-9 col-lg-10 ">
	...
	</div>
	<div id="sidenavdiv" class="col-md-3 col-lg-2"></div>
</div>
      
<script>

$('#sidenavdiv').sidenav("sidenav_bodys");

</script>
```

>自动处理sidenav_bodys中的h1-h6标签，生成导航

>可用通过为h标签设置data-sidenav="xxx"来自定义标题

>可为非h标签添加class="sidenav"来使用此标签
