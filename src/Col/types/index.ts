export type NumberOffsetColumn =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11';
export type CommonNumberColumn = 'auto' | NumberOffsetColumn | '12';
export interface Column {
  size: CommonNumberColumn;
  offset?: NumberOffsetColumn;
}

export type TypeCol = CommonNumberColumn | Column;
export type TypeColOptional = CommonNumberColumn | Partial<Column>;
