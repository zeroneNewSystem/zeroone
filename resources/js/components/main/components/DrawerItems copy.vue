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
        "المشتريات",
        "mdi-shopping",
        "إضافة مشتريات",
        "فواتير المشتريات",
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
      ["invoice", "invoicemanagement"],
      ["customers"],
      ["units", "types", "forms", "product", "products"],
      ["companymanagement"],
      [
        "accountingmanagement",
        "addupdateincome",
        "addupdateincomeitem",
        "addupdateoutcome",
        "addoutcomeitem",
      ],
      ["bill", "bills", "suppliers"],

      [
        "accounts",
        "returninvoicemanagement",
        "addupdatebillreturn",
        "returnbillmanagement",
      ],
      [
        "addupdateinvoicereturn",
        "returninvoicemanagement",
        "addupdatebillreturn",
        "returnbillmanagement",
      ],
    ],
  }),
};
</script>
