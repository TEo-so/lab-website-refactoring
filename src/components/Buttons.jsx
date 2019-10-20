import React from "react";
import { Button } from "antd";

export const AddButton = () => {
  return (
    <Button size="small" icon="plus-circle" className="button">
      添加
    </Button>
  );
};

export const AmendButton = () => {
  return (
    <Button size="small" icon="edit" className="button">
      修改
    </Button>
  );
};

export const SaveButton = () => {
  return (
    <Button size="small" icon="file-text" className="button">
      保存
    </Button>
  );
};

export const CancelButton = () => {
  return (
    <Button size="small" icon="close-circle" className="button">
      取消选中
    </Button>
  );
};

export const DeleteButton = () => {
  return (
    <Button size="small" icon="delete" className="button">
      删除
    </Button>
  );
};

export const BatchButton = () => {
  return (
    <Button size="small" icon="snippets " className="button">
      批量导入
    </Button>
  );
};
