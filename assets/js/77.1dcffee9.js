(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{687:function(s,e,a){"use strict";a.r(e);var t=a(7),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),e("p",[s._v("提供注解简化使用：字典翻译"),e("br"),s._v("\n字典服务提供本地文件json使用（默认）、提供接口调用使用、扩展自定义实现使用"),e("br"),s._v("\n服务类返回参数支持单体字段、列表、实体嵌套")]),s._v(" "),e("h2",{attrs:{id:"引入依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖"}},[s._v("#")]),s._v(" 引入依赖")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    <dependencies>\n        <dependency>\n            <groupId>cn.iosd</groupId>\n            <artifactId>simple-starter-dict</artifactId>\n            <version>Version</version>\n        </dependency>\n    </dependencies>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"配置项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[s._v("#")]),s._v(" 配置项")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("simple:\n  dict:\n    ##字典 缺省项为true\n    enabled: true\n    ## 调用远程接口获取字典项列表实现类请求接口地址前缀（若为空则注解填写需要完整接口路径）\n    remoteBaseUrl: http://127.0.0.1:11120\n    ## localDictServiceImpl实现类的本地字典文件目录，默认/dict.json。注：resource资源下\n    resourceDictFileDir: /dict.json\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h2",{attrs:{id:"功能项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能项"}},[s._v("#")]),s._v(" 功能项")]),s._v(" "),e("h3",{attrs:{id:"本地文件json字典翻译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地文件json字典翻译"}},[s._v("#")]),s._v(" 本地文件json字典翻译")]),s._v(" "),e("h4",{attrs:{id:"文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件"}},[s._v("#")]),s._v(" 文件")]),s._v(" "),e("p",[s._v("resources/dict.json")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{"leader":[{"value":"1","label":"领导"},{"value":"2","label":"苦工"}],"sex":[{"value":"1","label":"女"},{"value":"2","label":"男"}]}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"示例1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例1"}},[s._v("#")]),s._v(" 示例1")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    @Schema(description = "性别-默认实现类的json文件调用字典")\n    @DictField(dictionaryParams = "sex", dictImplClass = LocalDictServiceImpl.class, relatedField = "sexText")\n    private Integer sex;\n\n    private String sexText;\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"远程接口字典翻译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程接口字典翻译"}},[s._v("#")]),s._v(" 远程接口字典翻译")]),s._v(" "),e("h4",{attrs:{id:"示例1-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例1-2"}},[s._v("#")]),s._v(" 示例1")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    @Schema(description = "隐藏身份-默认远程调用接口实现类字典")\n    @DictField(dictionaryParams = "http://127.0.0.1:11120/dict/remote/hideIdentity", dictImplClass = RemoteDictServiceImpl.class , relatedField = "hideIdentityText")\n    private Integer hideIdentity;\n\n    private String hideIdentityText;\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h4",{attrs:{id:"示例2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例2"}},[s._v("#")]),s._v(" 示例2")]),s._v(" "),e("p",[s._v("配置文件：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("simple:\n  dict:\n    remoteBaseUrl: http://127.0.0.1:11120\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("使用：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    @Schema(description = "隐藏身份-默认远程调用接口实现类字典")\n    @DictField(dictionaryParams = "/dict/remote/hideIdentity", dictImplClass = RemoteDictServiceImpl.class, relatedField = "hideIdentityText")\n    private Integer hideIdentity;\n    \n    private String hideIdentityText;\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"自定义实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义实现"}},[s._v("#")]),s._v(" 自定义实现")]),s._v(" "),e("h4",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    @Schema(description = "身份标识-自定义远程调用接口实现类字典")\n    @DictField(dictionaryParams = "idCard", dictImplClass = CustomDictServiceImpl.class, relatedField = "idCardText")\n    private Integer idCard;\n\n    private String idCardText;\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h4",{attrs:{id:"自定义实现类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义实现类"}},[s._v("#")]),s._v(" 自定义实现类")]),s._v(" "),e("p",[s._v("示例代码：customDictServiceImpl 需继承DictService")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('@Service\npublic class CustomDictServiceImpl implements DictService {\n\n    private RestTemplate restTemplate = new RestTemplate();\n\n    @Override\n    public List<DictItem> getDictItemList(String dictionaryParams) {\n        String path = "http://127.0.0.1:11120/simple-demo-dict/dict/custom/" + dictionaryParams;\n        ResponseEntity<Response<List<DictItem>>> responseEntity = restTemplate.exchange(path, HttpMethod.GET, null, new ParameterizedTypeReference<Response<List<DictItem>>>() {\n        });\n        return responseEntity.getBody().getData();\n    }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);