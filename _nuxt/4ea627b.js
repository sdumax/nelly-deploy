(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{370:function(e,t,r){"use strict";r.r(t);r(21),r(3),r(53),r(15),r(23),r(9),r(33);var o={layout:"dashboard",data:function(){return{head:"Add new Product",form:{name:"",slug:"",description:"",prce:""},show:!1,alertType:"success",message:""}},methods:{onSubmit:function(e){e.preventDefault(),this.sluggify(),this.notice("success",this.form.name+" added successfully")},onReset:function(e){e.preventDefault(),this.form.name="",this.form.slug="",this.form.description="",this.form.price="",this.show=!1},sluggify:function(){var e=this.form.name;this.form.slug=e.split(" ").join("-")},notice:function(e,t){var r=this;this.message=t,this.alertType=e,this.show=!0,setTimeout((function(){r.message="",r.alertType=e,r.show=!1}),5e3)}}},n=r(12),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("b-card",{staticClass:"mx-auto mt-1",staticStyle:{"max-width":"40rem"}},[r("b-card-header",[e._v(e._s(e.head))]),e._v(" "),r("test-alert",{attrs:{show:e.show,variant:e.alertType}},[e._v(e._s(e.message))]),e._v(" "),r("b-card",{staticClass:"body"},[r("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[r("b-form-group",{attrs:{id:"input-group-1",label:"Product Name","label-for":"input-1"}},[r("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Enter product name",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"input-group-3",label:"Description","label-for":"input-3"}},[r("b-form-input",{attrs:{id:"input-3",placeholder:"Enter description",required:""},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"input-group-4",label:"Price","label-for":"input-4"}},[r("b-form-input",{attrs:{id:"input-4",type:"number",placeholder:"Enter price",required:""},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"input-group-4",label:"Price","label-for":"input-4"}},[r("b-form-select",{attrs:{id:"input-4",type:"number",placeholder:"Enter price",required:""},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),e._v(" "),r("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")]),e._v(" "),r("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TestAlert:r(147).default})}}]);