(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{249:function(e,a,s){e.exports=s.p+"assets/img/simple-base-generator-liuc-2023-5-0-0.a546e8c7.png"},250:function(e,a,s){e.exports=s.p+"assets/img/simple-base-generator-sheji-2023-5-0-0.0f593e85.png"},255:function(e,a,s){e.exports=s.p+"assets/img/simple-base-generator-codeany-2023-5-1-0.1663d31f.png"},708:function(e,a,s){"use strict";s.r(a);var t=s(7),r=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),a("p",[e._v("提供工程、代码生成服务及接口")]),e._v(" "),a("h2",{attrs:{id:"使用流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用流程"}},[e._v("#")]),e._v(" 使用流程")]),e._v(" "),a("p",[a("img",{attrs:{src:s(249),alt:"使用流程"}})]),e._v(" "),a("h2",{attrs:{id:"框架设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#框架设计"}},[e._v("#")]),e._v(" 框架设计")]),e._v(" "),a("p",[a("img",{attrs:{src:s(250),alt:"框架设计"}})]),e._v(" "),a("h2",{attrs:{id:"代码解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码解析"}},[e._v("#")]),e._v(" 代码解析")]),e._v(" "),a("p",[e._v("主要设计思路")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("   使用一个接口类，在单独启动工程时默认使用走向mybatis的实现类；\n   在其他工程使用依赖引入时默认优先走向Feign的接口调用实现类，远程调用单独启动的微服务；\n   在其他工程使用依赖引入时可选走向mybatis的实现类，使用配置文件某个值作为开关，默认关闭；\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:s(255),alt:"代码解析"}})]),e._v(" "),a("h2",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[e._v("#")]),e._v(" 使用示例")]),e._v(" "),a("h3",{attrs:{id:"生成工程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成工程"}},[e._v("#")]),e._v(" 生成工程")]),e._v(" "),a("p",[e._v("启动依赖工程"),a("br"),e._v("\n调用接口地址：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("..../simple-base-generator-service/generator/projectGen?projectName=simple-service-generator&packageName=cn.iosd.demo&moduleName=generator\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"生成mybatis代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成mybatis代码"}},[e._v("#")]),e._v(" 生成Mybatis代码")]),e._v(" "),a("p",[e._v("main方法调用示例:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    public static void main(String[] args) {\n        DatabaseGenVo vo = new DatabaseGenVo();\n        vo.setAuthorName("ok1996");\n        vo.setDataBaseUrl("jdbc:mysql://127.0.0.1:3306/simple_demo?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true");\n        vo.setDataBaseUserName("root");\n        vo.setDataBasePassword("123456");\n        vo.setPackageName("cn.iosd.demo");\n        vo.setProjectName("simple-service-generator");\n        vo.setModuleName("generator");\n        vo.setTableNames(Collections.singletonList("demo_article"));\n        List<String> tablePrefix = new ArrayList<>();\n        tablePrefix.add("demo");\n        vo.setTablePrefix(tablePrefix);\n        DatabaseGenService.generate(vo);\n        log.info("文件生成目录：" + new File("target/generator").getAbsolutePath());\n    }\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);