import React from "react";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";

const View = ({ wine, deleteEntry }) => {
  return wine.map((wines) => (
    <tr key={wines.name}>
      <td>{wines.name}</td>
      <td>{wines.type}</td>
      <td>{wines.alContent}</td>
      <td className="delete-btn" onClick={() => deleteEntry(wines.name)}>
        <Icon icon={trash} />
      </td>
    </tr>
  ));
};

export default View;
