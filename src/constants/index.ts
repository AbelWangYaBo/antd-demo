
export const MENU_LIST = [
  {
    label: "Home",
    key: "/",
    path: '/',
    iconkey: 'HomeOutlined',
  },
  {
    label: "Masters",
    key: "/masters",
    iconkey: 'AppstoreAddOutlined',
    children: [
      {
        label: "Master List",
        key: "/masters/master-list",
        iconkey: 'FolderOpenOutlined',
        children: [
          {
            label: "Read Data From SAP",
            key: "/masters/master-list/read-data-from-sap"
          },
          {
            label: "Department",
            key: "/masters/master-list/department"
          },
          {
            label: "Zone Area",
            key: "/masters/master-list/zone-area"
          },
          {
            label: "State City",
            key: "/masters/master-list/state-city"
          },
          {
            label: "MVGR",
            key: "/masters/master-list/mvgr"
          },
          {
            label: "SBU",
            key: "/masters/master-list/sbu"
          },
          {
            label: "Products",
            key: "/masters/master-list/products"
          },
          {
            label: "Material Pricing Group",
            key: "/masters/master-list/material-pricing-group"
          },
          {
            label: "CnF Excluded Items",
            key: "/masters/master-list/cnf-excluded-items"
          },
          {
            label: "Map Customer to Distributor",
            key: "/masters/master-list/map-customer-to-distributor"
          },
          {
            label: "Map Customer to Departments",
            key: "/masters/master-list/map-customer-to-departments"
          },
          {
            label: "Approving Limits",
            key: "/masters/master-list/approving-limits"
          },
          {
            label: "Zone-wise ASP",
            key: "/masters/master-list/zone-wise-asp"
          },
          {
            label: "Product-wise Limit Price",
            key: "/masters/master-list/product-wise-limit-price"
          },
          {
            label: "Product Wise Toll Center",
            key: "/masters/master-list/product-wise-toll-center"
          },
          {
            label: "Distributor - Product wise Mapping",
            key: "/masters/master-list/distributor---product-wise-mapping"
          },
          {
            label: "Department Order Type",
            key: "/masters/master-list/department-order-type"
          },
          {
            label: "Map Article To CnF",
            key: "/masters/master-list/map-article-to-cnf"
          },
          {
            label: "Default Supply Plant",
            key: "/masters/master-list/default-supply-plant"
          },
          {
            label: "Product With Default Discount",
            key: "/masters/master-list/product-with-default-discount"
          },
          {
            label: "NID",
            key: "/masters/master-list/nid"
          },
          {
            label: "Block Customer from Order Creation",
            key: "/masters/master-list/block-customer-from-order-creation"
          },
          {
            label: "Products with End User Document",
            key: "/masters/master-list/products-with-end-user-document"
          },
          {
            label: "Upload Expected Delivery Dates for Pending Orders",
            key: "/masters/master-list/upload-expected-delivery-dates-for-pending-orders"
          },
          {
            label: "PESO Products",
            key: "/masters/master-list/peso-products"
          },
          {
            label: "Customer-wise Product-wise CnF Mapping",
            key: "/masters/master-list/customer-wise-product-wise-cnf-mapping"
          },
          {
            label: "Multiplexing Kit CSC Approvers",
            key: "/masters/master-list/multiplexing-kit-csc-approvers"
          },
          {
            label: "SBU wise CnF",
            key: "/masters/master-list/sbu-wise-cnf"
          },
          {
            label: "Customer / Product / SBU Shipping Instructions",
            key: "/masters/master-list/customer-product-sbu-shipping-instructions"
          },
          {
            label: "Send Mail for Single Batch Single Customer Orders",
            key: "/masters/master-list/send-mail-for-single-batch-single-customer-orders"
          },
          {
            label: "Sales Group",
            key: "/masters/master-list/sales-group"
          },
          {
            label: "Rate Contract Customers",
            key: "/masters/master-list/rate-contract-customers"
          },
          {
            label: "Rate Contract Errors",
            key: "/masters/master-list/rate-contract-errors"
          },
          {
            label: "Customer segment Mapping",
            key: "/masters/master-list/customer-segment-mapping"
          }
        ],
      },
      {
        label: "Access Control",
        key: "/masters/access-control",
        iconkey: 'SettingFilled',
        children: [
          {
            label: "Employees",
            key: "/masters/access-control/employees", "iconkey": "UserAddOutlined"
          },
          {
            label: "Unlock Employee",
            key: "/masters/access-control/unlock-employee", "iconkey": "UserDeleteOutlined"
          },
          {
            label: "Assign Roles",
            key: "/masters/access-control/assign-roles", "iconkey": "UserSwitchOutlined"
          },
          {
            label: "Customer",
            key: "/masters/access-control/customer", "iconkey": "MacCommandOutlined"
          },
          {
            label: "SBU Employee Mapping for Selection",
            key: "/masters/access-control/sbu-employee-mapping-for-selection", "iconkey": "UsergroupAddOutlined"
          },
          {
            label: "CnF",
            key: "/masters/access-control/cnf", "iconkey": "UsergroupDeleteOutlined"
          },
          {
            label: "Toll Center",
            key: "/masters/access-control/toll-center", "iconkey": "UserOutlined"
          },
          {
            label: "Central Warehouse",
            key: "/masters/access-control/central-warehouse", "iconkey": "ShopOutlined"
          }
        ],
      },
      {
        label: "Channel 13 Masters",
        key: "/masters/channel-13-masters",
        iconkey: 'HourglassOutlined',
        children: [
          {
            label: "Sending mail after CSC Approval",
            key: "/masters/channel-13-masters/sending-mail-after-csc-approval"
          },
          {
            label: "Customer-wise Product-wise Price",
            key: "/masters/channel-13-masters/customer-wise-product-wise-price"
          }
        ],
      },
      {
        label: "Shipment Tracking",
        key: "/masters/shipment-tracking",
        children: [
          {
            label: "Sigma Customer",
            key: "/masters/shipment-tracking/sigma-customer"
          },
          {
            label: "Banner",
            key: "/masters/shipment-tracking/banner"
          },
          {
            label: "Employee - Sigma Customer / Plant Mapping",
            key: "/masters/shipment-tracking/employee---sigma-customer-plant-mapping"
          },
          {
            label: "Expected Delivery Days",
            key: "/masters/shipment-tracking/expected-delivery-days"
          },
          {
            label: "Activate Transporter Login",
            key: "/masters/shipment-tracking/activate-transporter-login"
          },
          {
            label: "Transporter Mapping",
            key: "/masters/shipment-tracking/transporter-mapping"
          },
          {
            label: "Opt Out Email",
            key: "/masters/shipment-tracking/opt-out-email"
          },
          {
            label: "Opt Out SMS",
            key: "/masters/shipment-tracking/opt-out-sms"
          }
        ],
      },
      {
        label: "Complaint Category",
        key: "/masters/complaint-category"
      },
      {
        label: "Perennial Non Available Items",
        key: "/masters/perennial-non-available-items"
      },
      {
        label: "Attachment",
        key: "/masters/attachment"
      },
      {
        label: "Upload Payment Customer",
        key: "/masters/upload-payment-customer"
      },
      {
        label: "Customer Annexure Master",
        key: "/masters/customer-annexure-master"
      }
    ],
  },
  {
    label: "Orders",
    key: "/orders",
    children: [
      {
        label: "Create / Edit",
        key: "/orders/create-edit"
      },
      {
        label: "Bulk Cancellation of Orders",
        key: "/orders/bulk-cancellation-of-orders"
      },
      {
        label: "Delete",
        key: "/orders/delete"
      },
      {
        label: "Pending For EUD Approval",
        key: "/orders/pending-for-eud-approval"
      },
      {
        label: "Pending For Rate Contract Approval",
        key: "/orders/pending-for-rate-contract-approval"
      },
      {
        label: "Pending For My Approval",
        key: "/orders/pending-for-my-approval"
      },
      {
        label: "Pending For CSC Approval",
        key: "/orders/pending-for-csc-approval"
      },
      {
        label: "Order History",
        key: "/orders/order-history"
      },
      {
        label: "Orders in Error",
        key: "/orders/orders-in-error"
      },
      {
        label: "Orders Stuck for SAP Intgegration",
        key: "/orders/orders-stuck-for-sap-intgegration"
      }
    ],
  },
  {
    label: "MIS",
    key: "/mis",
    children: [
      {
        label: "Orders",
        key: "/mis/orders"
      },
      {
        label: "Invoices",
        key: "/mis/invoices"
      },
      {
        label: "Sales",
        key: "/mis/sales"
      },
      {
        label: "Orders V/S Sales",
        key: "/mis/orders-vs-sales"
      },
      {
        label: "Orders V/S Sales - Schedule Lines",
        key: "/mis/orders-vs-sales---schedule-lines"
      },
      {
        label: "EUD Approval Report",
        key: "/mis/eud-approval-report"
      },
      {
        label: "Employee wise Sales Mapping Download",
        key: "/mis/employee-wise-sales-mapping-download"
      },
      {
        label: "Outstanding",
        key: "/mis/outstanding"
      },
      {
        label: "Stock",
        key: "/mis/stock"
      },
      {
        label: "LR Details",
        key: "/mis/lr-details"
      },
      {
        label: "View Sales Tax Difference",
        key: "/mis/view-sales-tax-difference"
      },
      {
        label: "Month Wise Total Value of Orders",
        key: "/mis/month-wise-total-value-of-orders"
      },
      {
        label: "Monthly Submitted Order Report",
        key: "/mis/monthly-submitted-order-report"
      },
      {
        label: "Zone Wise Product Wise Average Price",
        key: "/mis/zone-wise-product-wise-average-price"
      },
      {
        label: "Orders Pending For Merck Approval",
        key: "/mis/orders-pending-for-merck-approval"
      },
      {
        label: "Draft Order Status",
        key: "/mis/draft-order-status"
      },
      {
        label: "Proportionate Freight",
        key: "/mis/proportionate-freight"
      },
      {
        label: "Dead Orders",
        key: "/mis/dead-orders"
      },
      {
        label: "Download Deleted Orders",
        key: "/mis/download-deleted-orders"
      },
      {
        label: "Download Orders for Customers For Deleted Order Items",
        key: "/mis/download-orders-for-customers-for-deleted-order-items"
      },
      {
        label: "Download Price List Report",
        key: "/mis/download-price-list-report"
      },
      {
        label: "Login Logout Report",
        key: "/mis/login-logout-report"
      },
      {
        label: "Audit Log Report",
        key: "/mis/audit-log-report"
      }
    ],
  },
  {
    label: "Dispatches",
    key: "/dispatches",
    children: [
      {
        label: "Download LR Details",
        key: "/dispatches/download-lr-details",
      }
    ],
  },
  {
    label: "Complaints",
    key: "/complaints",
    children: [
      {
        label: "Pending For Closure",
        key: "/complaints/pending-for-closure",
      }
    ],
  },
  {
    label: "Shipment Tracking",
    key: "/shipment-tracking",
    children: [
      {
        label: "Search Shipments",
        key: "/shipment-tracking/search-shipments"
      },
      {
        label: "Retriggering Emails",
        key: "/shipment-tracking/retriggering-emails"
      },
      {
        label: "Feedback Report",
        key: "/shipment-tracking/feedback-report"
      },
      {
        label: "Dashboards",
        key: "/shipment-tracking/dashboards"
      }
    ],
  },
  {
    label: "COA",
    key: "/coa",
    children: [
      {
        label: "Upload Multiple Files",
        key: "/coa/upload-multiple-files"
      },
      {
        label: "Upload Mapping Data",
        key: "/coa/upload-mapping-data"
      }
    ],
  },
  {
    label: "Transaction view",
    key: "/transaction-view",
    children: [
      {
        label: "Transaction Stuck For SAP Integration",
        key: "/transaction-view/transaction-stuck-for-sap-integration"
      },
      {
        label: "Transaction Data",
        key: "/transaction-view/transaction-data"
      }
    ],
  },
  {
    label: "Customer Annexure view",
    key: "/customer-annexure-view"
  },
];