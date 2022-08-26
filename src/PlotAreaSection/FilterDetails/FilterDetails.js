import React from 'react';

import { Input, Select, Button, Dropdown, Menu } from 'antd';
import "./FilterDetails.scss";
import { Collapse } from 'antd';

const { Option } = Select;
const { Panel } = Collapse;

//Dropdown data of plot area details, built up area details
const roomsMenu = [
  <Menu>
    <Menu.Item key="0">
      <a>1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a>2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
]

const FilterDetails = ({ onClose }) => {
  return (
    <div>
      <div className="filter_data">
   

        <div className='builtUp_area_data'>

          <div className='plot_area_details'>
            <div className='total_plot'>
              <h4>Total Plot Area</h4>
              <div className='inputs1'>
                <Input placeholder="Enter Breadth" />
                <Input placeholder="Enter Length" />
              </div>
              <div className='area_info'>
                {/* <h4>Area</h4> <span>:</span> */}
                <h3>{"200"}sqft</h3>
              </div>
            </div>
            <div className='back_area'>
              <h4> Set Back Area</h4>
              <div className='inputs1'>
                <Input placeholder="Left side" />
                <Input placeholder="Right Side" />
              </div>
              <div className='area_info'>
                <h3>{"60"}sqft</h3>
              </div>
            </div>
            <div className='back_area1'>
              <h4> Set Back Area</h4>
              <div className='inputs1'>
                <Input placeholder="Front Side" />
                <Input placeholder="Back Side" />
              </div>
              <div className='area_info'>
                <h3>{"60"}sqft</h3>
              </div>
            </div>
            <div>
              <div className='builtUp_area'>
                <h2>BuiltUp Area</h2>
                <span>:</span>
                <h3>{"140"}</h3> {/* plot area - set back area */}
              </div>
            </div>
          </div>

          <div className='property_type_data'>
            <div className='ground_floor_data'>
              {/* <Dropdown overlay={roomsMenu} placement="bottomLeft" trigger={["click"]}
                    getPopupContainer={(trigger) => trigger.parentNode}
                  > */}
              {/* <Button>G + 1</Button> */}
              {/* </Dropdown> */}
              <div className='floors_data'>
                <h4>property Types</h4>
                <h5>Clear All</h5>
              </div>
              <div className='floor_btns'>
                <Button>G</Button>
                <Button>G + 1</Button>
                <Button>G + 2</Button>
                <Button>G + 3</Button>
                <Button>G + 4</Button>
                <Button>G + 5</Button>
              </div>
            </div>
            <div className='floors_info'>
              <h3>G</h3>
              <h5>Bed Rooms</h5>
              <div className='room_btns'>
                <Button>1 BHK</Button>
                <Button>2 BHK</Button>
                <Button>3 BHK</Button>
                <Button>4 BHK</Button>
              </div>
            </div>
            <div className='Rooms_dimensions'>
              <Input placeholder='Length' />
              <Input placeholder='Breadth' />
              <Input placeholder='Builtup Area' />
            </div>
          </div>

          <div className='facing_propertys'>
            <Select defaultValue="Property Facing">
              <Option value="1">East</Option>
              <Option value="2">West</Option>
              <Option value="3">North</Option>
              <Option value="4">South</Option>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterDetails;