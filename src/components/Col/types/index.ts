export type NumberOffsetColumn =
  | '1'
  | 1
  | '2'
  | 2
  | '3'
  | 3
  | '4'
  | 4
  | '5'
  | 5
  | '6'
  | 6
  | '7'
  | 7
  | '8'
  | 8
  | '9'
  | 9
  | '10'
  | 10
  | '11'
  | 11;
export type CommonNumberColumn = 'auto' | NumberOffsetColumn | '12' | 12;
export interface Column {
  size: CommonNumberColumn;
  offset?: NumberOffsetColumn;
}

export type TypeCol = CommonNumberColumn | Column;
export type TypeColOptional = CommonNumberColumn | Partial<Column>;
