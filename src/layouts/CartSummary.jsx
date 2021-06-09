import React from 'react'
import { NavLink } from 'react-router-dom';
import { Dropdown, DropdownDivider, DropdownItem } from "semantic-ui-react";

export default function CartSummary() {
    return (
        <div>
            <Dropdown item text="Sepetim">
              <Dropdown.Menu>
                <Dropdown.Item>product</Dropdown.Item>
                <Dropdown.Item>product</Dropdown.Item>
                <Dropdown.Item>product</Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Item as={NavLink} to="/cart-details" >Sepete Git</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
