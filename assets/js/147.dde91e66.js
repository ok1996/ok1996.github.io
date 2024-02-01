(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{767:function(s,a,n){"use strict";n.r(a);var e=n(7),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("p",[s._v("提供发送邮件使用")]),s._v(" "),a("h2",{attrs:{id:"引入依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖"}},[s._v("#")]),s._v(" 引入依赖")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    <dependencies>\n        <dependency>\n            <groupId>cn.iosd</groupId>\n            <artifactId>simple-starter-email</artifactId>\n            <version>Version</version>\n        </dependency>\n    </dependencies>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[s._v("#")]),s._v(" 配置项")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("simple:\n  email:\n    config:\n      ##SMTP服务器host\n      smtpHost:\n      ##SMTP服务器端口号\n      smtpPort:\n      ##发件人邮箱用户名\n      username:\n      ##发件人邮箱密码\n      password:\n      ##发件人邮箱地址\n      fromEmail:\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"功能项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能项"}},[s._v("#")]),s._v(" 功能项")]),s._v(" "),a("h3",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[s._v("#")]),s._v(" 使用示例")]),s._v(" "),a("h4",{attrs:{id:"基础使用-工程配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础使用-工程配置项"}},[s._v("#")]),s._v(" 基础使用-工程配置项")]),s._v(" "),a("p",[s._v("注入服务类")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    @Autowired\n    private EmailService emailService;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("发送电子邮件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    @Operation(summary = "发送电子邮件")\n    @GetMapping(value = "/sendEmail")\n    public Response<?> sendEmailSinglePerson(@ParameterObject SendEmailVo vo) throws MessagingException, IOException {\n        emailService.sendEmail(vo.getToEmails(), vo.getCcEmails(), vo.getBccEmails(), vo.getSubject(), vo.getContent(), vo.getIsHtml(), vo.getAttachments(), vo.getInlineImages());\n        return Response.ok();\n    }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("发送参数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('@Data\npublic class SendEmailVo {\n    @Schema(description = "收件人的电子邮件地址", example = "testxxx@qq.com,testxxx@foxmail.com")\n    private List<String> toEmails;\n    @Schema(description = "抄送人的电子邮件地址列表", example = "testyyy@qq.com,testyyy@foxmail.com")\n    private List<String> ccEmails;\n    @Schema(description = "附件文件的路径列表", example = "E:\\\\temp\\\\新建文本文档.txt")\n    private List<String> attachments;\n    @Schema(description = "邮件主题")\n    private String subject;\n    @Schema(description = "邮件内容")\n    private String content;\n    @Schema(description = "指示邮件内容是否为HTML格式", defaultValue = "false")\n    private Boolean isHtml;\n    @Schema(description = "密送人的电子邮件地址列表", example = "testzzz@qq.com")\n    private List<String> bccEmails;\n    @Schema(description = "内联图片的路径和CID映射", hidden = true)\n    Map<String, String> inlineImages;\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h4",{attrs:{id:"配置使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置使用"}},[s._v("#")]),s._v(" 配置使用")]),s._v(" "),a("p",[s._v("指：发送邮件时配置发件人邮件配置参数")]),s._v(" "),a("p",[s._v("EmailService使用下列方法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n    /**\n     * 发送电子邮件方法\n     *\n     * @param toEmails      收件人的电子邮件地址列表\n     * @param ccEmails      抄送人的电子邮件地址列表\n     * @param bccEmails     密送人的电子邮件地址列表\n     * @param subject       邮件主题\n     * @param content       邮件内容\n     * @param isHtml        指示邮件内容是否为HTML格式\n     * @param attachments   附件文件的路径列表\n     * @param inlineImages  内联图片的路径和CID映射\n     * @param emailConfigVo 发件人邮件配置参数\n     * @throws MessagingException 发送邮件时可能抛出的异常\n     * @throws IOException        读取附件文件时可能抛出的异常\n     */\n    public void sendEmail(List<String> toEmails, List<String> ccEmails, List<String> bccEmails, String subject, String content, boolean isHtml, List<String> attachments, Map<String, String> inlineImages, EmailConfigVo emailConfigVo)\n            throws MessagingException, IOException {\n        Session session = createSession(emailConfigVo);\n        Message message = createMessage(session, toEmails, ccEmails, bccEmails, subject, content, isHtml, attachments, inlineImages, emailConfigVo.getFromEmail());\n        Transport.send(message);\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);