import React from 'react';
import { connect } from 'react-redux';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { IoMdOptions } from "react-icons/io";

class FilterNewsDroupDown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          <IoMdOptions />Filter
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem >Publish Date</DropdownItem>
          <DropdownItem >Author Name</DropdownItem>
          <DropdownItem >News SiteName</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}
function mapStateToProps(state) {
  return {
    "news": state.allNews,
    "isLoading": state.isLoading
  };
}
export default connect(mapStateToProps)(FilterNewsDroupDown);