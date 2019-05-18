import React from "react";
import PropType from "prop-types";
import { Table, Popconfirm, Button } from "antd";

function ProductList({ onDelete, products }) {
  console.log(onDelete);
  console.log(products);
  const columns = [
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Actions",
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      }
    }
  ];
  return <Table dataSource={products} columns={columns} />;
}

ProductList.propType = {
  onDelete: PropType.func.isRequired,
  products: PropType.array.isRequired
};
export default ProductList;
