<template>
  <div align="center">
    <v-card max-width="500">
      <v-card-title>
        <v-spacer></v-spacer>
        <span class="set-font">รายละเอียดการสั่งซื้อและชำระเงิน</span>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-avatar size="100" class="elevation-5">
          <v-img :src="payData.customer_image"></v-img>
        </v-avatar>
        <v-row class="mt-2">
          <v-col cols="6" class="text-right set-font-title py-1">
            รหัสลูกค้า :
          </v-col>
          <v-col cols="6" class="text-left set-font-normal py-1">{{
            payData.customer_id
          }}</v-col>
          <v-col cols="6" class="text-right set-font-title py-1">
            ชื่อลูกค้า :
          </v-col>
          <v-col cols="6" class="text-left set-font-normal py-1">{{
            payData.customer_fullname
          }}</v-col>
          <v-col cols="6" class="text-right set-font-title py-1">
            เบอร์โทร :
          </v-col>
          <v-col cols="6" class="text-left set-font-normal py-1">{{
            payData.customer_tel
          }}</v-col>
          <v-col cols="6" class="text-right set-font-title py-1">
            เลขที่ใบเสร็จ :
          </v-col>
          <v-col cols="6" class="text-left set-font-normal py-1">{{
            payData.order_id
          }}</v-col>
          <v-col cols="6" class="text-right set-font-title py-1">
            ราคารวม :
          </v-col>
          <v-col cols="6" class="text-left set-font-normal py-1"
            >{{ payData.order_totalpay }} บาท</v-col
          >
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <form
        method="post"
        action="https://www.thaiepay.com/epaylink/payment.aspx"
      >
        <div>
          <input
            type="hidden"
            name="customeremail"
            v-model="payData.customer_email"
          />
          <input
            type="hidden"
            name="productdetail"
            v-model="payData.order_id"
          />
          <input type="hidden" name="refno" v-model="payData.refno" />
          <input
            type="hidden"
            name="merchantid"
            v-model="payData.paysolutions_merchant"
          />
          <input type="hidden" name="cc" v-model="payData.cc" />
          <input type="hidden" name="total" v-model="payData.order_totalpay" />
          <input type="hidden" name="lang" v-model="payData.lang" />
          <input type="hidden" name="postbackurl" v-model="payData.postback" />
          <input type="hidden" name="returnurl" v-model="returnurl" />
        </div>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" type="submit">ยืนยัน</v-btn>
          <v-btn
            outlined
            color="error"
            :href="`https://app-apsth.com/orderdetial/${payData.order_id_pri}`"
            >ยกเลิก</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </form>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "IndexPage",
  data() {
    return {
      returnurl: "https://practical-easley-b123c3.netlify.app/success",
      payData: {
        order_id_pri: "",
        order_id: "",
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
      payDataMock: {
        order_id_pri: "903464",
        order_id: "RECEIPT_NO_903464",
        shop_bank_id: "2953",
        order_pay_id: "2",
        order_point_id: "1",
        refno: "4243919299",
        paysolutions_merchant: "47133361",
        cc: "0",
        customer_id_pri: "276636",
        customer_tel: "0951481485",
        order_totalpay: "170",
        customer_fullname: "นาย Pratya Phocha",
        customer_email: "gafai020@gmail.com",
        lang: "TH",
        customer_id: "C0164",
        customer_image:
          "https://s3-ap-southeast-1.amazonaws.com/apsth-assets-upload/customer/customer_276636_20211112094739.jpeg",
        postback:
          "https://6ca5-2405-9800-ba20-ce94-ac64-3369-e2a6-678e.ap.ngrok.io/postback",
      },
    };
  },
  created() {
    this.payData.order_id_pri = this.$route.query.order_id_pri;
    this.payData.order_id = this.$route.query.order_id;
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
  mounted() {
    let paramsQurey = "";
    let data = {
      order_id_pri: this.payData.order_id_pri,
      order_pay_id: this.payData.order_pay_id,
      order_point_id: this.payData.order_point_id,
      shop_bank_id: this.payData.shop_bank_id,
    };
    if (data) {
      for (const [key, value] of Object.entries(data)) {
        paramsQurey += `${key}=${value}&`;
      }
    }
    this.postback += `?${paramsQurey}`;
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Niramit:wght@300;400;500;600;700&display=swap");
.set-font {
  font-family: "Niramit", sans-serif;
}
.set-font-title {
  font-size: 20px;
  font-family: "Niramit", sans-serif;
  font-weight: bold;
}
.set-font-normal {
  font-family: "Niramit", sans-serif;
  font-size: 20px;
}
</style>
