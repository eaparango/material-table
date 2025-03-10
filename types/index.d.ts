import * as React from 'react';
import { IconProps } from '@material-ui/core/Icon';
import { string } from 'prop-types';

export interface MaterialTableProps<RowData extends object> {
  actions?: (Action<RowData> | ((rowData: RowData) => Action<RowData>))[];
  columns: Column<RowData>[];
  components?: Components;
  data: RowData[] | ((query: Query<RowData>) => Promise<QueryResult<RowData>>);
  detailPanel?: ((rowData: RowData) => React.ReactNode) | (DetailPanel<RowData> | ((rowData: RowData) => DetailPanel<RowData>))[];
  editable?: {
    isEditable?: (rowData: RowData) => boolean;
    isDeletable?: (rowData: RowData) => boolean;
    onRowAdd?: (newData: RowData) => Promise<void>;
    onRowUpdate?: (newData: RowData, oldData?: RowData) => Promise<void>;
    onRowDelete?: (oldData: RowData) => Promise<void>;
  }
  icons?: Icons;
  isLoading?: boolean;
  title?: string | React.ReactElement<any>;
  options?: Options;
  parentChildData?: (row: RowData, rows: RowData[]) => RowData[];
  localization?: Localization;
  onChangeRowsPerPage?: (pageSize: number) => void;
  onChangePage?: (page: number) => void;
  onChangeColumnHidden?: (column:Column<RowData>, hidden:boolean) => void;
  onColumnDragged?: (sourceIndex: number, destinationIndex: number) => void;
  onOrderChange?: (orderBy: number, orderDirection: ("asc" | "desc")) => void;
  onGroupRemoved?: (column:Column<RowData>, index:boolean) => void;
  onChangeColumnGrouped?: (column:Column<RowData>, index:boolean) => void;
  onRowClick?: (event?: React.MouseEvent, rowData?: RowData, toggleDetailPanel?: (panelIndex?: number) => void) => void;
  onRowSelected?: (rowData: RowData) => void;
  onSearchChange?: (searchText: string) => void;
  onSelectionChange?: (data: RowData[], rowData?: RowData) => void;
  onTreeExpandChange?: (data: any, isExpanded: boolean) => void;
  style?: React.CSSProperties;
  tableRef?: any;
}

export interface Filter<RowData extends object> {
  column: Column<RowData>;
  operator: "=";
  value: any;
}

export interface Query<RowData extends object> {
  filters: Filter<RowData>[];
  page: number;
  pageSize: number;
  search: string;
  orderBy: Column<RowData>;
  orderDirection: "asc" | "desc";
}

export interface QueryResult<RowData extends object> {
  data: RowData[];
  page: number;
  totalCount: number;
}

export interface DetailPanel<RowData extends object> {
  disabled?: boolean;
  icon?: string | React.ReactElement<any>;
  openIcon?: string | React.ReactElement<any>;
  tooltip?: string;
  render: (rowData: RowData) => string | React.ReactNode;
}

export interface Action<RowData extends object> {
  disabled?: boolean;
  icon: string | (() => React.ReactElement<any>);
  isFreeAction?: boolean;
  tooltip?: string;
  onClick: (event: any, data: RowData | RowData[]) => void;
  iconProps?: IconProps;
  hidden?: boolean;
}

export interface EditComponentProps<RowData extends object> {
  rowData: RowData;
  value: any,
  onChange: (newValue: any) => void,
  columnDef: EditCellColumnDef,
}

export interface EditCellColumnDef {
  field: string,
  title: string,
  tableData: {
    filterValue: any,
    groupOrder: any,
    groupSort: string,
    id: number,
  }
}

export interface Column<RowData extends object> {
  cellStyle?: React.CSSProperties | ((data: RowData[], rowData: RowData) => React.CSSProperties);
  currencySetting?: { locale?: string, currencyCode?: string, minimumFractionDigits?: number, maximumFractionDigits?: number };
  customFilterAndSearch?: (filter: any, rowData: RowData, columnDef: Column<RowData>) => boolean;
  customSort?: (data1: RowData, data2: RowData, type: (('row' | 'group'))) => number;
  defaultFilter?: any;
  defaultGroupOrder?: number;
  defaultGroupSort?: ('asc' | 'desc');
  defaultSort?: ('asc' | 'desc');
  disableClick?: boolean;
  editComponent?: ((props: EditComponentProps<RowData>) => React.ReactElement<any>);
  emptyValue?: string | React.ReactElement<any> | ((data: any) => React.ReactElement<any> | string);
  export?: boolean;
  field?: keyof RowData;
  filtering?: boolean;
  filterPlaceholder?: string;
  filterCellStyle?: React.CSSProperties;
  grouping?: boolean;
  headerStyle?: React.CSSProperties;
  hidden?: boolean;
  initialEditValue?: any,
  lookup?: object;
  editable?: ('always' | 'onUpdate' | 'onAdd' | 'never' | ((columnDef: Column<RowData>, rowData: RowData) => boolean));
  removable?: boolean;
  render?: (data: RowData, type: ('row' | 'group')) => any;
  searchable?: boolean;
  sorting?: boolean;
  title?: string | React.ReactElement<any>;
  type?: ('string' | 'boolean' | 'numeric' | 'date' | 'datetime' | 'time' | 'currency');
}

export interface Components {
  Action?: React.ComponentType<any>;
  Actions?: React.ComponentType<any>;
  Body?: React.ComponentType<any>;
  Cell?: React.ComponentType<any>;
  Container?: React.ComponentType<any>;
  EditField?: React.ComponentType<any>;
  EditRow?: React.ComponentType<any>;
  FilterRow?: React.ComponentType<any>;
  Groupbar?: React.ComponentType<any>;
  GroupRow?: React.ComponentType<any>;
  Header?: React.ComponentType<any>;
  Pagination?: React.ComponentType<any>;
  OverlayLoading?: React.ComponentType<any>;
  Row?: React.ComponentType<any>;
  Toolbar?: React.ComponentType<any>;
}

export const MTableAction: () => React.ReactElement<any>;
export const MTableActions: () => React.ReactElement<any>;
export const MTableBody: () => React.ReactElement<any>;
export const MTableBodyRow: () => React.ReactElement<any>;
export const MTableCell: () => React.ReactElement<any>;
export const MTableEditField: () => React.ReactElement<any>;
export const MTableEditRow: () => React.ReactElement<any>;
export const MTableFilterRow: () => React.ReactElement<any>;
export const MTableGroupbar: () => React.ReactElement<any>;
export const MTableGroupRow: () => React.ReactElement<any>;
export const MTableHeader: () => React.ReactElement<any>;
export const MTablePagination: () => React.ReactElement<any>;
export const MTableToolbar: () => React.ReactElement<any>;
export const MTable: () => React.ReactElement<any>;

export interface Icons {
  Add?: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  Check?: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  Clear?: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  Delete?: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  DetailPanel?: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  Edit?: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  Export?: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  Filter?: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  FirstPage?: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  SortArrow?: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  LastPage?: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  NextPage?: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  PreviousPage?: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  ResetSearch?: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  Search?: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  ThirdStateCheck?: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  ViewColumn?: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
}

export interface Options {
  actionsCellStyle?: React.CSSProperties;
  actionsColumnIndex?: number;
  addRowPosition?: ('first' | 'last');
  columnsButton?: boolean;
  defaultExpanded?: boolean;
  debounceInterval?: number;
  detailPanelType?: ('single' | 'multiple');
  doubleHorizontalScroll?: boolean;
  draggable?: boolean;
  emptyRowsWhenPaging?: boolean;
  exportAllData?: boolean;
  exportButton?: boolean;
  exportDelimiter?: string;
  exportFileName?: string;
  exportCsv?: (columns: any[], renderData: any[]) => void;
  filtering?: boolean;
  filterCellStyle?: React.CSSProperties;
  header?: boolean;
  headerStyle?: React.CSSProperties;
  initialPage?: number;
  loadingType?: ('overlay' | 'linear');
  maxBodyHeight?: number | string;
  padding?: ('default' | 'dense');
  paging?: boolean;
  grouping?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];
  paginationType?: ('normal' | 'stepped');
  rowStyle?: React.CSSProperties | ((data: any, index: number, level: number) => React.CSSProperties);
  showEmptyDataSourceMessage?: boolean;
  showFirstLastPageButtons?: boolean;
  showSelectAllCheckbox?: boolean;
  showTitle?: boolean;
  showTextRowsSelected?: boolean;
  search?: boolean;
  searchFieldAlignment?: 'left' | 'right';
  searchFieldStyle?: React.CSSProperties;
  selection?: boolean;
  selectionProps?: any | ((data: any) => any);
  sorting?: boolean;
  toolbar?: boolean;
  toolbarButtonAlignment?: 'left' | 'right';
  detailPanelColumnAlignment?: 'left' | 'right';
}

export interface Localization {
  body?: {
    emptyDataSourceMessage?: string;
    filterRow?: {
      filterTooltip?: string;
    };
    editRow?: {
      saveTooltip?: string;
      cancelTooltip?: string;
      deleteText?: string;
    },
    addTooltip?: string;
    deleteTooltip?: string;
    editTooltip?: string;
  };
  header?: {
    actions?: string;
  };
  grouping?: {
    groupedBy?: string;
    placeholder?: string;
  };
  pagination?: {
    firstTooltip?: string;
    previousTooltip?: string;
    nextTooltip?: string;
    labelDisplayedRows?: string;
    labelRowsPerPage?: string;
    lastTooltip?: string;
    labelRowsSelect?: string;
  };
  toolbar?: {
    addRemoveColumns?: string;
    nRowsSelected?: string;
    showColumnsTitle?: string;
    showColumnsAriaLabel?: string;
    exportTitle?: string;
    exportAriaLabel?: string;
    exportName?: string;
    searchTooltip?: string;
    searchPlaceholder?: string;
  };
}

export default class MaterialTable<RowData extends object> extends React.Component<MaterialTableProps<RowData>> {}
