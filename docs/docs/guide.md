
....


# 我测试下从subtree去修改文档，然后在代码里去发布的全流程

## 这是二级标题，对应HTML中<h2>标签

### 这是三级标题，对应HTML中<h3>标签
## 微信公众号-纵横云账号绑定


**接口地址**:`/uaa/v1/user/auth/bindingWeChatMP`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "openId": "",
  "userName": "",
  "userPwd": ""
}
```


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|from|from|body|true|微信公众号绑定传参|微信公众号绑定传参|
|&emsp;&emsp;openId|三方唯一id||true|string||
|&emsp;&emsp;userName|账号名||true|string||
|&emsp;&emsp;userPwd|用户密码||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- |
|200|OK|ResultMsgObj|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- |
|code||integer(int32)|integer(int32)|
|data||object||
|msg||string||
|success||boolean||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": "",
	"success": true
}
```