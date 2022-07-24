<template>
  <div>
    <h1 class="primary--text">Hello world</h1>
  </div>
</template>
<script>
export default {
  name: "IndexPage",
  data() {
    return {
      payData: {
        order_id_pri: "",
        shop_bank_id: "",
        order_pay_id: "",
        order_point_id: "",
        refno: "",
        paysolutions_merchant: "",
        cc: "",
        customer_id_pri: "",
        customer_tel: "",
        order_totalpay: "",
        customer_fullname: "",
        customer_email: "",
        lang: "",
        customer_id: "",
        customer_image: "",
        postback: "",
      },
    };
  },
  created() {
    this.payData.order_id_pri = this.$route.query.order_id_pri;
    this.payData.shop_bank_id = this.$route.query.shop_bank_id;
    this.payData.order_pay_id = this.$route.query.order_pay_id;
    this.payData.order_point_id = this.$route.query.order_point_id;
    this.payData.refno = this.$route.query.refno;
    this.payData.paysolutions_merchant =
      this.$route.query.paysolutions_merchant;
    this.payData.cc = this.$route.query.cc;
    this.payData.customer_id_pri = this.$route.query.customer_id_pri;
    this.payData.customer_tel = this.$route.query.customer_tel;
    this.payData.order_totalpay = this.$route.query.order_totalpay;
    this.payData.customer_fullname = this.$route.query.customer_fullname;
    this.payData.customer_email = this.$route.query.customer_email;
    this.payData.lang = this.$route.query.lang;
    this.payData.customer_id = this.$route.query.customer_id;
    this.payData.customer_image = this.$route.query.customer_image;
    this.payData.postback = this.$route.query.postback;
    console.log(this.payData);
  },
};
</script>
