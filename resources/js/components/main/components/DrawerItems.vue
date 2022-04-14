<template>
  <v-list dark>
    <v-list-item color="black--text" to="/" class="text-right align-self-start">
      <v-list-item-icon>
        <v-icon>mdi-view-dashboard</v-icon>
      </v-list-item-icon>
      <v-list-item-title>لوحة التحكم</v-list-item-title>
    </v-list-item>

    <v-list-group
      v-for="main_item in main_menu"
      :key="main_item.name"
      :prepend-icon="main_item.icon"
    >
      <template v-slot:activator>
        <v-list-item-title>{{ main_item.name }} </v-list-item-title>
      </template>
      <v-list-item
        v-for="sub_item in main_item.sub_menu"
        :to="sub_item.link"
        :key="sub_item.name"
        link
        exact
      >
        <v-list-item-icon>
          <v-icon>{{
            sub_item.icon != "" ? sub_item.icon : "mdi-view-dashboard"
          }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title v-text="sub_item.name"></v-list-item-title>
      </v-list-item>
    </v-list-group>
    <v-list-item color="black--text" to="/reports" class="text-right align-self-start">
      <v-list-item-icon>
        <v-icon>mdi-view-dashboard</v-icon>
      </v-list-item-icon>
      <v-list-item-title>التقارير</v-list-item-title>
    </v-list-item>
    <v-list-group
      v-for="main_item in under_menu"
      :key="main_item.name"
      :prepend-icon="main_item.icon"
    >
      <template v-slot:activator>
        <v-list-item-title>{{ main_item.name }} </v-list-item-title>
      </template>
      <v-list-item
        v-for="sub_item in main_item.sub_menu"
        :to="sub_item.link"
        :key="sub_item.name"
        link
        exact
      >
        <v-list-item-icon>
          <v-icon>{{
            sub_item.icon != "" ? sub_item.icon : "mdi-view-dashboard"
          }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title v-text="sub_item.name"></v-list-item-title>
      </v-list-item>
    </v-list-group>
    
  </v-list>
</template>

<script>
export default {
  data: () => ({
    main_menu: [
      {
        name: "المبيعات",
        icon: "mdi-shopping",
        sub_menu: [
          {
            name: "العملاء",
            link: "/customers",
            icon: "",
          },
          {
            name: "فاتورة مبيعات",
            link: "/invoice",
            icon: "",
          },
          {
            name: "فواتير المبيعات",
            link: "/invoices",
            icon: "",
          },
          {
            name: "سندات العملاء",
            link: "/receipts/customer",
            icon: "",
          },
        ],
      },

      {
        name: "المشتريات",
        icon: "mdi-shopping",
        sub_menu: [
          {
            name: "الموردون",
            link: "/suppliers",
            icon: "",
          },
          {
            name: "فواتير المشتريات",
            link: "/purchases",
            icon: "",
          },
          {
            name: "فاتورة شراء",
            link: "/purchase",
            icon: "",
          },
          // {
          //   name: "أوامر الشراء",
          //   link: "/orders",
          //   icon: "",
          // },
          {
            name: "سندات الموردين",
            link: "/receipts/supplier",
            icon: "",
          },
        ],
      },
      {
        name: "الأصناف والخدمات",
        icon: "mdi-source-fork",
        sub_menu: [
          {
            name: "الوحدات",
            link: "/units",
            icon: "",
          },
          // {
          //   name: " الأنواع",
          //   link: "/types",
          //   icon: "",
          // },
          {
            name: "المجموعات",
            link: "/forms",
            icon: "",
          },
          {
            name: "إضافة صنف",
            link: "/product",
            icon: "",
          },
          {
            name: "إدارة الأصناف",
            link: "/products",
            icon: "",
          },
        ],
      },
      {
        name: "المحاسبة",
        icon: "mdi-source-fork",
        sub_menu: [
          {
            name: "قيود حركة الأموال",
            link: "/money_transactions",
            icon: "",
          },
          {
            name: "حركة أموال",
            link: "/money_move",
            icon: "",
          },
          {
            name: "إضافة رأس مال",
            link: "/additional_money",
            icon: "",
          },
          {
            name: "إهلاك أصل ثابت",
            link: "/fixed_asset_depreciation",
            icon: "",
          },
          {
            name: "سحب المالك",
            link: "/owner_withdraw",
            icon: "",
          },
          {
            name: "توزيع أرباح",
            link: "/distribute_profits",
            icon: "",
          },

          {
            name: "محاسبة رواتب",
            link: "/products",
            icon: "",
          },
          {
            name: "قيود يدوية",
            link: "/products",
            icon: "",
          },
          {
            name: "الدليل المحاسبي",
            link: "/accounts",
            icon: "",
          },
        ],
      },
    ],
    under_menu: [
      {
        name: "الاعدادات",
        icon: "mdi-shopping",
        sub_menu: [
          {
            name: "إعدادت عامة",
            link: "/general_settings",
            icon: "",
          },
          {
            name: " المستخدمين ",
            link: "/bills",
            icon: "",
          },
          {
            name: "الضرائب",
            link: "/orders",
            icon: "",
          },
         
        ],
      },

      {
        name: "المساعدة",
        icon: "mdi-shopping",
        sub_menu: [
          {
            name: "عن النظام",
            link: "/about",
            icon: "",
          },
          {
            name: "أرسل ملاحظاتك",
            link: "/send_notes",
            icon: "",
          },
          
        ],
      },
     
    ],

    admins: [],
  }),
};
</script>
