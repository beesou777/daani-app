<template>
  <div class="container">
    <div class="d-flex justify-content-between">
      <div class="pt-3 t-primary large">Product Data</div>
      <hr class="m-0" />
    </div>
    <!-- Action Buttons -->
    <div class="d-flex justify-content-end mb-3">
      <button class="btn btn-primary" @click="addRow">Add</button>
      <button class="btn btn-danger mx-3" @click="deleteSelectedRows">Delete</button>
      <button class="btn btn-secondary" @click="editProduct">Edit</button>
    </div>
    <DataTable
      style="white-space: nowrap"
      class="display text-center"
      :columns="column"
      :options="options"
      :data="data"
      ref="table"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted} from "vue";
import { useRouter } from "vue-router";
import { useProductStore } from "../../../../store/productStore";
import DataTablesCore from "datatables.net";
import DataTable from "datatables.net-vue3";
import "datatables.net/js/jquery.dataTables";
import "datatables.net-buttons/js/dataTables.buttons";
import "datatables.net-buttons/js/buttons.html5";
import "datatables.net-buttons/js/buttons.print";
import "datatables.net-select/js/dataTables.select"; // Import the select extension
DataTable.use(DataTablesCore);

const router = useRouter();
const productStore = useProductStore();
// Initialize DataTable

const table = ref(null);

onMounted(async () => {
  await productStore.getAllProduct();
});

const renderImage = (data, type, row) => {
  return `<img src="${data}" alt="Product Image" width="100" height="80" style="object-fit: cover;" />`;
};

const column = [
  { title: "Image", data: "image", render: renderImage },
  { title: "Product Name", data: "product_name" },
  { title: "Categories", data: "product_categories" },
  { title: "Quantity available", data: "product_unit" },
  { title: "Regular price", data: "regular_price" },
];

const data = computed(() => {
  if (productStore.products) {
    return productStore.products.map((product) => {
      if (product && product._id) { // Check if product exists and has _id property
        return {
          id: product._id,
          image: product.product_image,
          product_name: product.product_name,
          product_categories: product.product_categorie,
          product_unit: product.product_unit,
          regular_price: product.regular_price,
          discounted_price: product.discounted_price,
          feature: product.feature
        };
      } else {
        return null; // Handle the case where product is undefined or doesn't have _id
      }
    });
  } else {
    return [];
  }
});


const options = {
  dom: "Blftipr",
  select: {
    style: "single",
  },
  createdRow: function (row, data, dataIndex) {
    row.addEventListener("click", () => {
      onClickRow(data);
    });
  },
  ordering: false,
  info: true,
  buttons: [
    {
      extend: "csv",
      text: "CSV",
      className: "btn mb-4 btn-warning rounded-1 border border-1 ",
    },
    {
      extend: "print",
      text: "print",
      className: "btn mb-4 mx-2 rounded-1 btn-success  border border-1 ",
    },
  ],
};

// Add row
const addRow = () => {
  router.push("/dashboard/product/add/");
};

// Delete selected rows
const deleteSelectedRows = () => {
  const id = productid.value.id;
  const index = productStore.products.findIndex((product) => product._id === id);
  if (index !== -1) {
    productStore.products.splice(index, 1);
  }
  productStore.deleteProduct(id)
};

const productid = ref('')
// Function to handle row click
const onClickRow = (rowData) => {
  const id = rowData
  productid.value = id
  productStore.productID = productid.value
};

const editProduct = ()=>{
  router.push(`/dashboard/product/edit/${productid.value.id}`);

}

</script>
