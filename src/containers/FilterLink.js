import Link from "../components/Link";
import { connect } from "react-redux";
import { setVisibiltyFilters } from "../actions";

const mapStateProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibiltyFilters(ownProps.filter));
    }
  };
};
export const FilterLink = connect(mapStateProps, mapDispatchProps)(Link);
