import { OtherConfigType } from './other-config-type';

export default interface GridHeadingInterface {
    /**
     * fieldName - This refers to field name mapping which gets returned from the server.
     *             The column value will be bound with this mapping
     */
    fieldName: string;

    /**
     * display - This refers to the column header name which is displayed to the user
     */
    display: string;

    /**
     * type - A column consists of multiple data types. Based on the value given here the column filtration and the way the data
     *        is displayed may vary
     */
    type: 'string' | 'url' | 'number' | 'date' | 'button-group';

    /**
     * width - This refers to the column's width which can be given as a px value or a percentage. Eg: '150px' or '25%'
     */
    width?: string;

    /**
     * disableFiltering - This boolean value determines if the filter is shown or hidden.
     *                    By default filtering is enabled which means it goes as false
     */
    disableFiltering?: boolean;

    /**
     * disableSorting - This boolean value determines if sorting is enabled/disabled.
     *                  By default sorting is enabled which means it goes as false
     */
    disableSorting?: boolean;

    /**
     * align - This value in the grid can be aligned to left, right or center. By default, it is left-aligned.
     */
    align?: 'left' | 'right' | 'center';

    /**
     * filterType - This is a feature to enable an optional filter type that can be given for types url or string.
     *              A multi-select filter type is an advanced filter which can either have one or more filter values given to a single
     *              column. A tag filter is a similar filter but is used if there are a very large number of possible values which
     *              cannot be displayed in a multi-filter's list of options. Eg: Social Security Numbers
     */
    filterType?: 'multi-select' | 'tag';

    /**
     * show - This identifies if a column is shown to the user or not. If this value is not given, the column is treated as a required
     *        column which is always shown and cannot be hidden by the user through column control. If true is given the column will
     *        be shown and the user can also hide it. If false is given the user cannot see the column but can enable it back through
     *        column control
     */
    show?: boolean;

    /**
     * other - This refers to additional configurations that can be given to a column to control the behaviour of urls, multi-selects
     *         and action buttons in the grid
     */
    other?: OtherConfigType;

    /**
     * sort - This field is autofilled by the grid system, do not set values manually
     */
    sort?: string;

    editable?: boolean;
}
