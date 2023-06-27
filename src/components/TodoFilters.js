const FilterContainer = ({ activeFilter, total, showAllTodos, showActiveTodos, showCompletedTodos, handleClearCompleted }) => {
  return (
    <div className="filter-container">
      <ItemsLeft total={total}/>
      <FilterButtonContainer activeFilter={activeFilter} showAllTodos={showAllTodos} showActiveTodos={showActiveTodos} showCompletedTodos={showCompletedTodos}/>
      <ClearCompleted handleClearCompleted={handleClearCompleted} />
    </div>
  )
};

const ItemsLeft = ({ total = 0 }) => {
  return (
    <p>
      {total} items left
    </p>
  )
};

const FilterButtonContainer = ({ activeFilter, showAllTodos, showActiveTodos, showCompletedTodos }) => {
  return (
    <div className="filter-button-container">
      <FilterButton action={() => showAllTodos()} active={activeFilter} filter="All"/>
      <FilterButton action={() => showActiveTodos()} active={activeFilter} filter="Active"/>
      <FilterButton action={() => showCompletedTodos()} active={activeFilter} filter="Completed"/>
    </div>
  )
};

const FilterButton = ({ action, active, filter }) => {
  return (
    <button className={active.toLowerCase() === filter.toLowerCase() ? "filter-button active" : "filter-button"} onClick={action}>
      {filter}
    </button>
  )
};

const ClearCompleted = ({handleClearCompleted}) => {
  return (
    <button className="clear-all" onClick={() => handleClearCompleted()}>
      Clear completed
    </button>
  )
};

export default FilterContainer;