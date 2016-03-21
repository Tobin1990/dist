define("pages/index/index",function(n,r,i){i.exports={url:"/",template:'<div class="page-header">\r\n    <h1>\r\n        控制台\r\n        <small>\r\n            <i class="icon-double-angle-right"></i>\r\n             查看\r\n        </small>\r\n    </h1>\r\n</div><!-- /.page-header -->\r\n\r\n<div class="row">\r\n    <div class="col-xs-12">\r\n        <!-- PAGE CONTENT BEGINS -->\r\n\r\n        <!--<div class="alert alert-block alert-success">\r\n            <button type="button" class="close" data-dismiss="alert">\r\n                <i class="icon-remove"></i>\r\n            </button>\r\n\r\n            <i class="icon-ok green"></i>\r\n\r\n            欢迎使用\r\n            <strong class="green">\r\n                Apollo 后台管理系统\r\n                <small>(v1.0)</small>\r\n            </strong>\r\n        </div>-->\r\n\r\n        <div class="row">\r\n            <div class="space-6"></div>\r\n\r\n            <div class="col-sm-7 infobox-container">\r\n                <div class="infobox infobox-green  ">\r\n                    <div class="infobox-icon">\r\n                        <i class="icon-comments"></i>\r\n                    </div>\r\n\r\n                    <div class="infobox-data">\r\n                        <span class="infobox-data-number">张三</span>\r\n                        <div class="infobox-content">今天的访客</div>\r\n                    </div>\r\n                    <div class="stat stat-success">8%</div>\r\n                </div>\r\n\r\n                <div class="infobox infobox-blue">\r\n                    <div class="infobox-icon">\r\n                        <i class="icon-twitter"></i>\r\n                    </div>\r\n\r\n                    <div class="infobox-data">\r\n                        <span class="infobox-data-number">11</span>\r\n                        <div class="infobox-content">今天的警告</div>\r\n                    </div>\r\n\r\n                    <div class="badge badge-success">\r\n                        +32%\r\n                        <i class="icon-arrow-up"></i>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="infobox infobox-pink  ">\r\n                    <div class="infobox-icon">\r\n                        <i class="icon-shopping-cart"></i>\r\n                    </div>\r\n\r\n                    <div class="infobox-data">\r\n                        <span class="infobox-data-number">8</span>\r\n                        <div class="infobox-content">今天的消息</div>\r\n                    </div>\r\n                    <div class="stat stat-important">4%</div>\r\n                </div>\r\n\r\n                <div class="infobox infobox-red  ">\r\n                    <div class="infobox-icon">\r\n                        <i class="icon-beaker"></i>\r\n                    </div>\r\n\r\n                    <div class="infobox-data">\r\n                        <span class="infobox-data-number">7</span>\r\n                        <div class="infobox-content">今天的任务</div>\r\n                    </div>\r\n                    <div class="badge badge-success">\r\n                        +6%\r\n                        <i class="icon-arrow-up"></i>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="space-6"></div>\r\n<!--\r\n                <div class="infobox infobox-green infobox-small infobox-dark">\r\n                    <div class="infobox-progress">\r\n                        <div class="easy-pie-chart percentage" data-percent="61" data-size="39">\r\n                            <span class="percent">61</span>%\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class="infobox-data">\r\n                        <div class="infobox-content">任务</div>\r\n                        <div class="infobox-content">完成</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="infobox infobox-blue infobox-small infobox-dark">\r\n                    <div class="infobox-chart">\r\n                        <span class="sparkline" data-values="3,4,2,3,4,4,2,2"></span>\r\n                    </div>\r\n\r\n                    <div class="infobox-data">\r\n                        <div class="infobox-content">获得</div>\r\n                        <div class="infobox-content">$32,000</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="infobox infobox-grey infobox-small infobox-dark">\r\n                    <div class="infobox-icon">\r\n                        <i class="icon-download-alt"></i>\r\n                    </div>\r\n\r\n                    <div class="infobox-data">\r\n                        <div class="infobox-content">下载次数</div>\r\n                        <div class="infobox-content">1,205</div>\r\n                    </div>\r\n                </div>\r\n-->\r\n            </div>\r\n            <div class="vspace-sm"></div>\r\n\r\n            <div class="col-sm-5">\r\n                <div class="widget-box">\r\n                    <div class="widget-header widget-header-flat widget-header-small">\r\n                        <h5>\r\n                            <i class="icon-signal"></i>\r\n                            访问来源\r\n                        </h5>\r\n\r\n                        <div class="widget-toolbar no-border">\r\n                            <button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown">\r\n                                本周\r\n                                <i class="icon-angle-down icon-on-right bigger-110"></i>\r\n                            </button>\r\n\r\n                            <ul class="dropdown-menu pull-right dropdown-125 dropdown-lighter dropdown-caret">\r\n                                <li class="active">\r\n                                    <a href="#" class="blue">\r\n                                        <i class="icon-caret-right bigger-110">&nbsp;</i>\r\n                                        本周\r\n                                    </a>\r\n                                </li>\r\n\r\n                                <li>\r\n                                    <a href="#">\r\n                                        <i class="icon-caret-right bigger-110 invisible">&nbsp;</i>\r\n                                        上周\r\n                                    </a>\r\n                                </li>\r\n\r\n                                <li>\r\n                                    <a href="#">\r\n                                        <i class="icon-caret-right bigger-110 invisible">&nbsp;</i>\r\n                                        本月\r\n                                    </a>\r\n                                </li>\r\n\r\n                                <li>\r\n                                    <a href="#">\r\n                                        <i class="icon-caret-right bigger-110 invisible">&nbsp;</i>\r\n                                        上月\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class="widget-body">\r\n                        <div class="widget-main">\r\n                            <div id="piechart-placeholder"></div>\r\n\r\n                            <div class="hr hr8 hr-double"></div>\r\n\r\n                            <div class="clearfix">\r\n                                <div class="grid3">\r\n                                    <span class="grey">\r\n                                        <i class="icon-facebook-sign icon-2x blue"></i>\r\n                                        &nbsp; likes\r\n                                    </span>\r\n                                    <h4 class="bigger pull-right">1,255</h4>\r\n                                </div>\r\n\r\n                                <div class="grid3">\r\n                                    <span class="grey">\r\n                                        <i class="icon-twitter-sign icon-2x purple"></i>\r\n                                        &nbsp; tweets\r\n                                    </span>\r\n                                    <h4 class="bigger pull-right">941</h4>\r\n                                </div>\r\n\r\n                                <div class="grid3">\r\n                                    <span class="grey">\r\n                                        <i class="icon-pinterest-sign icon-2x red"></i>\r\n                                        &nbsp; pins\r\n                                    </span>\r\n                                    <h4 class="bigger pull-right">1,050</h4>\r\n                                </div>\r\n                            </div>\r\n                        </div><!-- /widget-main -->\r\n                    </div><!-- /widget-body -->\r\n                </div><!-- /widget-box -->\r\n            </div><!-- /span -->\r\n        </div><!-- /row -->\r\n\r\n        <div class="hr hr32 hr-dotted"></div>\r\n\r\n        <div class="row">\r\n            <div class="col-sm-5">\r\n                <div class="widget-box transparent">\r\n                    <div class="widget-header widget-header-flat">\r\n                        <h4 class="lighter">\r\n                            <i class="icon-star orange"></i>\r\n                            数据报表\r\n                        </h4>\r\n\r\n                        <div class="widget-toolbar">\r\n                            <a href="#" data-action="collapse">\r\n                                <i class="icon-chevron-up"></i>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class="widget-body">\r\n                        <div class="widget-main no-padding">\r\n                            <table class="table table-bordered table-striped">\r\n                                <thead class="thin-border-bottom">\r\n                                    <tr>\r\n                                        <th>\r\n                                            <i class="icon-caret-right blue"></i>\r\n                                            来源\r\n                                        </th>\r\n\r\n                                        <th>\r\n                                            <i class="icon-caret-right blue"></i>\r\n                                            价格\r\n                                        </th>\r\n\r\n                                        <th class="hidden-480">\r\n                                            <i class="icon-caret-right blue"></i>\r\n                                            状态\r\n                                        </th>\r\n                                    </tr>\r\n                                </thead>\r\n\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>internet.com</td>\r\n\r\n                                        <td>\r\n                                            <small>\r\n                                                <s class="red">$29.99</s>\r\n                                            </small>\r\n                                            <b class="green">$19.99</b>\r\n                                        </td>\r\n\r\n                                        <td class="hidden-480">\r\n                                            <span class="label label-info arrowed-right arrowed-in">销售中</span>\r\n                                        </td>\r\n                                    </tr>\r\n\r\n                                    <tr>\r\n                                        <td>online.com</td>\r\n\r\n                                        <td>\r\n                                            <small>\r\n                                                <s class="red"></s>\r\n                                            </small>\r\n                                            <b class="green">$16.45</b>\r\n                                        </td>\r\n\r\n                                        <td class="hidden-480">\r\n                                            <span class="label label-success arrowed-in arrowed-in-right">可用</span>\r\n                                        </td>\r\n                                    </tr>\r\n\r\n                                    <tr>\r\n                                        <td>newnet.com</td>\r\n\r\n                                        <td>\r\n                                            <small>\r\n                                                <s class="red"></s>\r\n                                            </small>\r\n                                            <b class="green">$15.00</b>\r\n                                        </td>\r\n\r\n                                        <td class="hidden-480">\r\n                                            <span class="label label-danger arrowed">待定</span>\r\n                                        </td>\r\n                                    </tr>\r\n\r\n                                    <tr>\r\n                                        <td>web.com</td>\r\n\r\n                                        <td>\r\n                                            <small>\r\n                                                <s class="red">$24.99</s>\r\n                                            </small>\r\n                                            <b class="green">$19.95</b>\r\n                                        </td>\r\n\r\n                                        <td class="hidden-480">\r\n                                            <span class="label arrowed">\r\n                                                <s>无货</s>\r\n                                            </span>\r\n                                        </td>\r\n                                    </tr>\r\n\r\n                                    <tr>\r\n                                        <td>domain.com</td>\r\n\r\n                                        <td>\r\n                                            <small>\r\n                                                <s class="red"></s>\r\n                                            </small>\r\n                                            <b class="green">$12.00</b>\r\n                                        </td>\r\n\r\n                                        <td class="hidden-480">\r\n                                            <span class="label label-warning arrowed arrowed-right">售完</span>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div><!-- /widget-main -->\r\n                    </div><!-- /widget-body -->\r\n                </div><!-- /widget-box -->\r\n            </div>\r\n\r\n            <div class="col-sm-7">\r\n                <div class="widget-box transparent">\r\n                    <div class="widget-header widget-header-flat">\r\n                        <h4 class="lighter">\r\n                            <i class="icon-signal"></i>\r\n                            数据报表\r\n                        </h4>\r\n\r\n                        <div class="widget-toolbar">\r\n                            <a href="#" data-action="collapse">\r\n                                <i class="icon-chevron-up"></i>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class="widget-body">\r\n                        <div class="widget-main padding-4">\r\n                            <div id="sales-charts"></div>\r\n                        </div><!-- /widget-main -->\r\n                    </div><!-- /widget-body -->\r\n                </div><!-- /widget-box -->\r\n            </div>\r\n        </div>\r\n\r\n        <div class="hr hr32 hr-dotted"></div>\r\n        <!-- PAGE CONTENT ENDS -->\r\n    </div><!-- /.col -->\r\n</div><!-- /.row -->',controller:["$scope","$injector",function(){n.async(["jquery/flot/jquery.flot.min","jquery/flot/jquery.flot.pie.min","jquery/flot/jquery.flot.resize.min"],function(){function n(n,r,i){$.plot(n,r,{series:{pie:{show:!0,tilt:.8,highlight:{opacity:.25},stroke:{color:"#fff",width:2},startAngle:2}},legend:{show:!0,position:i||"ne",labelBoxBorderColor:null,margin:[-30,15]},grid:{hoverable:!0,clickable:!0}})}$(".easy-pie-chart.percentage").each(function(){var n=$(this).closest(".infobox"),r=$(this).data("color")||(n.hasClass("infobox-dark")?"rgba(255,255,255,0.95)":n.css("color")),i="rgba(255,255,255,0.95)"==r?"rgba(255,255,255,0.25)":"#E2E2E2",s=parseInt($(this).data("size"))||50;$(this).easyPieChart({barColor:r,trackColor:i,scaleColor:!1,lineCap:"butt",lineWidth:parseInt(s/10),animate:/msie\s*(8|7|6)/.test(navigator.userAgent.toLowerCase())?!1:1e3,size:s})}),$(".sparkline").each(function(){var n=$(this).closest(".infobox"),r=n.hasClass("infobox-dark")?"#FFF":n.css("color");$(this).sparkline("html",{tagValuesAttribute:"data-values",type:"bar",barColor:r,chartRangeMin:$(this).data("min")||0})});var r=$("#piechart-placeholder").css({width:"90%","min-height":"150px"});if(r.length){var i=[{label:"social networks",data:38.7,color:"#68BC31"},{label:"search engines",data:24.5,color:"#2091CF"},{label:"ad campaigns",data:8.2,color:"#AF4E96"},{label:"direct traffic",data:18.6,color:"#DA5430"},{label:"other",data:10,color:"#FEE074"}];n(r,i),r.data("chart",i),r.data("draw",n);var s=$("<div class='tooltip top in'><div class='tooltip-inner'></div></div>").hide().appendTo("body"),a=null;r.on("plothover",function(n,r,i){if(i){if(a!=i.seriesIndex){a=i.seriesIndex;var l=i.series.label+" : "+i.series.percent+"%";s.show().children(0).text(l)}s.css({top:r.pageY+10,left:r.pageX+10})}else s.hide(),a=null})}var l=$("#sales-charts").css({width:"100%",height:"220px"});if(l.length){for(var e=[],d=0;d<2*Math.PI;d+=.5)e.push([d,Math.sin(d)]);for(var o=[],d=0;d<2*Math.PI;d+=.5)o.push([d,Math.cos(d)]);for(var t=[],d=0;d<2*Math.PI;d+=.2)t.push([d,Math.tan(d)]);$.plot("#sales-charts",[{label:"Domains",data:e},{label:"Hosting",data:o},{label:"Services",data:t}],{hoverable:!0,shadowSize:0,series:{lines:{show:!0},points:{show:!0}},xaxis:{tickLength:0},yaxis:{ticks:10,min:-2,max:2,tickDecimals:3},grid:{backgroundColor:{colors:["#fff","#fff"]},borderWidth:1,borderColor:"#555"}})}})}]}});