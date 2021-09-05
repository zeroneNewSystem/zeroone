<template>
  <v-list dark>
    <v-list-item color="black--text" to="/" class="text-right align-self-start">
      <v-list-item-icon>
        <v-icon>mdi-view-dashboard</v-icon>
      </v-list-item-icon>
      <v-list-item-title>لوحة التحكم</v-list-item-title>
    </v-list-item>

    <v-list-group
      v-for="j in sidebaritems.length"
      :to="'/' + sidebarroutes[j - 1][0]"
      :key="j"
      :prepend-icon="sidebaritems[j - 1][1]"
    >
      <template v-slot:activator>
        <v-list-item-title>{{ sidebaritems[j - 1][0] }}</v-list-item-title>
      </template>
      <v-list-item
        v-for="i in sidebaritems[j - 1].length - 2"
        :to="'/' + sidebarroutes[j - 1][i - 1]"
        :key="i"
        link
        exact
      >
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>
        <v-list-item-title
          v-text="sidebaritems[j - 1][i + 1]"
        ></v-list-item-title>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    admins: [
      ["Management", "mdi-border-color"],
      ["Settings", "mdi-settings"],
    ],
    cruds: [
      ["Create", "mdi-add"],
      ["Read", "mdi-insert"],
      ["Update", "mdi-update"],
      ["Delete", "mdi-delete"],
    ],
    sidebaritems: [
      ["البيع", "mdi-border-color", "إضافة فاتورة جديدة", "إدارة الفواتير"],
      ["العملاء", "mdi-group", "إدارة العملاء"],
      [
        "الأصناف والخدمات",
        "mdi-source-fork",
        "الوحدات",
        "المجموعات",
        "الأنواع",
        "إضافة صنف",
        "إدارة الأصناف",
      ],
      ["الموردون", " mdi-car", "إدارة الموردين"],
      [
        "مصروفات وايرادات",
        " mdi-car",
        "متابعة الدخل والخرج",
        "تسجيل إيرادات",
        " إضافة بند إيرادات",
        "تسجيل مصروفات",
        " إضافة بند مصروفات",
      ],
      [
        "الشراء",
        "mdi-shopping",
        "إضافة مشتريات",
        "إدارة فواتير الشراء",
        "الموردون",
      ],

      [
        "الحسابات",
        "mdi-keyboard-return",
        "شجرة الحسابات",
        "إدارة مرتجع البيع",
        "مرتجع الشراء",
        "إدارة مرتجع الشراء",
      ],

      [
        "الاسترجاع",
        "mdi-keyboard-return",
        "مرتجع البيع",
        "إدارة مرتجع البيع",
        "مرتجع الشراء",
        "إدارة مرتجع الشراء",
      ],
    ],
    sidebarroutes: [
      ["addupdateinvoice", "invoicemanagement"],
      ["customermanagement"],
      ["units", "types", "forms", "product", "products"],
      ["companymanagement"],
      [
        "accountingmanagement",
        "addupdateincome",
        "addupdateincomeitem",
        "addupdateoutcome",
        "addoutcomeitem",
      ],
      ["purchase", "purchasemanagement", "suppliers"],

      [
        "accounts",
        "returninvoicemanagement",
        "addupdatepurchasereturn",
        "returnpurchasemanagement",
      ],
      [
        "addupdateinvoicereturn",
        "returninvoicemanagement",
        "addupdatepurchasereturn",
        "returnpurchasemanagement",
      ],
    ],
  }),
};
</script>
