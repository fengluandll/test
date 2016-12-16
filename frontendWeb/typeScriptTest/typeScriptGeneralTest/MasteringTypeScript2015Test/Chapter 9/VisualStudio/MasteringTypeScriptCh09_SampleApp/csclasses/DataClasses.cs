using System;
using System.Collections.Generic;
using System.Linq;

namespace MasteringTypeScriptCh09_SampleApp.csclasses
{
    public class ManufacturerCollection : IFilterProvider, IManufacturerCollection
    {
        public ManufacturerModel[] models { get; set; }
        public ManufacturerModel model { get; set; }
        public string url;

        public string[] findBoardTypes()
        {
            throw new NotImplementedException();
        }

        public IManufacturerName[] findManufacturerNames()
        {
            throw new NotImplementedException();
        }

        public void filterByManufacturer() { }
        public void filterByBoardType() { }
    }
    public class ManufacturerModel
    {
        public string manufacturer { get; set; }
        public string manufacturer_logo { get; set; }
        public string logo_class { get; set; }
        public BoardModel[] boards { get; set; }
    }

    public class BoardModel
    {
        public string name { get; set; }
        public string description { get; set; }
        public string image { get; set; }
        public string long_description { get; set; }
        public BoardSize[] sizes { get; set; }
        public BoardType[] board_types { get; set; }
    }

    public class BoardSize
    {
        public int volume { get; set; }
        public int length { get; set; }
        public int width { get; set; }
        public string sail_min { get; set; }
        public string sail_max { get; set; }
    }
    public class BoardType
    {
        public string board_type { get; set; }
    }

    public enum FilterType
    {
        Manufacturer,
        BoardType,
        None
    }
    public class FilterValue
    {
        public string filterValue { get; set; }
    }
    public class FilterModel
    {
        public FilterType filterType { get; set; }
        public string filterName { get; set; }
        public FilterValue[] filterValues { get; set; }
    }

    public interface IManufacturerName
    {
        string manufacturer { get; set; }
        string manufacturer_logo { get; set; }
    }
    public interface IManufacturerCollection
    {
        ManufacturerModel[] models { get; set; }
    }
    public interface IFilterProvider
    {
        IManufacturerName[] findManufacturerNames();
        string[] findBoardTypes();
    }

    public class FilterCollection
    {
        private IFilterProvider _filterProvider;
        public FilterModel[] models { get; set; }
        public void buildFilterCollection() { }
    }

    public class MockFilterProvider : IFilterProvider
    {
        public string[] findBoardTypes()
        {
            throw new NotImplementedException();
        }

        public IManufacturerName[] findManufacturerNames()
        {
            throw new NotImplementedException();
        }
    }

    public class CollectionView {
    }

    public class CompositeView
    {

    }
    public class ItemView
    {

    }

    //views

    public class ManufacturerCollectionView : CollectionView
    {
        public ManufacturerCollection model { get; set; }
        public ManufacturerModel[] collection { get; set; }
        public ManufacturerView childView { get; set; }
    }

    public class ManufacturerView : CompositeView
    {
        public ManufacturerModel model { get; set; }
        public BoardModel[] collection { get; set; }
        public BoardView childView { get; set; }
    }

    public class BoardView : CompositeView
    {
        public BoardModel model { get; set; }
        public BoardSizeView childView { get; set; }
        public void onClicked() { }
        public BoardSize[] collection { get; set; }

    }

    public class BoardSizeView : ItemView
    {
        public BoardSize model { get; set; }
    }

    public class BoardDetailView : CompositeView
    {
        public BoardSizeView childView { get; set; }
    }

    public class FilterCollectionView : CollectionView
    {
        public FilterCollection model { get; set; }
        public FilterModel[] collection { get; set; }
        public FilterModelView childView { get; set; }

    }

    public class FilterModelView : CompositeView
    {
        public FilterModel model { get; set; }
        public FilterItemView childView { get; set; }
        public FilterValue[] collection { get; set; }
    }
    public class FilterItemView : ItemView
    {
        public FilterValue model { get; set; }
        public void filterClicked() { }
    }

    public enum StateType
    {
        BoardListOnly,
        BoardListWithFilter,
        BoardDetail
    }

    public enum PanelType
    {
        Initial, Secondary
    }
    public interface IState
    {
        PanelType getPanelType();
        string getShowFilterClass();
        bool isFilterPanelVisible();
        StateType getStateType();

    }

   
    public class Mediator
    {
        private IState _currentState;
        private IState _currentMainPanelState;
        private IMediatorFunctions _pageViewLayout;
        private bool _isMobile;

        private BoardListOnlyState _mainPanelState;
        private DetailPanelState _detailPanelState;
        private BoardListWithFilterPanelState _filterPanelState;
        public Mediator(IMediatorFunctions pageViewLayout, bool isMobile) { }
        public IState getNextState(StateType stateType) { throw new NotImplementedException(); }
        public void moveToState(StateType stateType) { }
        public void shotHideFilterButtonClicked() { }
        public IState getCurrentMainPanelState() { throw new NotImplementedException(); }

    }

    public interface IMediatorFunctions
    {
        void showLeftPanel();
        void hideLeftPanel();
        void cyclePanels(string forwardOrNext);
        void showFilterButtonChangeClass(string fromClass, string toClass);
    }

    public class PageViewLayout : IMediatorFunctions
    {
        public void cyclePanels(string forwardOrNext)
        {
            throw new NotImplementedException();
        }

        public void hideLeftPanel()
        {
            throw new NotImplementedException();
        }

        public void showFilterButtonChangeClass(string fromClass, string toClass)
        {
            throw new NotImplementedException();
        }

        public void showLeftPanel()
        {
            throw new NotImplementedException();
        }
    }

    public class BoardListOnlyState : State, IState
    {
        BoardListOnlyState(Mediator mediator) : base(mediator) { }

        public PanelType getPanelType()
        {
            throw new NotImplementedException();
        }

        public string getShowFilterClass()
        {
            throw new NotImplementedException();
        }

        public StateType getStateType()
        {
            throw new NotImplementedException();
        }

        public bool isFilterPanelVisible()
        {
            throw new NotImplementedException();
        }
    }

    public class DetailPanelState : State, IState
    {
        DetailPanelState(Mediator mediator) : base(mediator) { }

        public PanelType getPanelType()
        {
            throw new NotImplementedException();
        }

        public string getShowFilterClass()
        {
            throw new NotImplementedException();
        }

        public StateType getStateType()
        {
            throw new NotImplementedException();
        }

        public bool isFilterPanelVisible()
        {
            throw new NotImplementedException();
        }
    }
    public class BoardListWithFilterPanelState : State, IState
    {
        BoardListWithFilterPanelState(Mediator mediator) : base(mediator) { }

        public PanelType getPanelType()
        {
            throw new NotImplementedException();
        }

        public string getShowFilterClass()
        {
            throw new NotImplementedException();
        }

        public StateType getStateType()
        {
            throw new NotImplementedException();
        }

        public bool isFilterPanelVisible()
        {
            throw new NotImplementedException();
        }
    }

    public class State {
        public Mediator _mediator;
        public State(Mediator mediator) { }
    }
}