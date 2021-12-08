import React from 'react';

import { ReactComponent as UpDownArrows } from '~/assets/svg/up-down-arrows.svg';
import TableActions from '~/components/TableActions';

const useTable = ({ onSort }) => {
  const [sortQuery, setSortQuery] = React.useState({});

  React.useEffect(() => {
    if (Object.keys(sortQuery).length >= 1) {
      onSort(sortQuery);
    }
  }, [sortQuery]);

  const toggleSort = (fieldname) => {
    setSortQuery((sort) => ({ [fieldname]: sort[fieldname] === 1 ? -1 : 1 }));
  };

  // Verifica se o a propriedade requisitada existe no objeto
  const getFieldByPath = ({ fields, path, format }) => {
    if (fields[path] || path in fields)
      return !format ? fields[path] : format(fields[path]);

    return '';
  };

  const getNestedFieldValue = ({ fields, path }) => {
    const keys = path.split('.');

    const result = keys.reduce((acc, key) => {
      if (!acc[key]) {
        return '';
      }

      return acc[key];
    }, fields);

    return result;
  };

  const getFieldsValues = ({ fields, path, format }) => {
    const keys = path;
    const result = keys
      .map((key) => ({ [key]: fields[key] }))
      .reduce(
        (obj, prop) => ({
          ...obj,
          ...prop,
        }),
        {}
      );

    return format
      ? format(result)
      : 'When path is array, the prop format is required';
  };

  // Retorna o valor do campo baseado na propriedade (path)
  const getFieldValue = (params) => {
    const { path } = params;
    // console.log(fields, path, format);
    if (Array.isArray(path)) return getFieldsValues(params);

    // Verifica se o path é aninhado
    if (path.indexOf('.') === -1) return getFieldByPath(params);

    return getNestedFieldValue(params);
  };

  const renderThead = ({ columns, ThComponent, onSort }) =>
    columns.map(({ key, label, sort }) => (
      <ThComponent
        key={key + label}
        className={
          sortQuery[key] === 1
            ? 'ascending'
            : sortQuery[key] === -1
            ? 'descending'
            : ''
        }
      >
        {label}
        {sort && (
          <UpDownArrows
            style={{ width: 'auto', marginLeft: 8, cursor: 'pointer' }}
            onClick={() => toggleSort(key)}
          />
        )}
      </ThComponent>
    ));

  const renderTbody = (columns, rows, TrComponent, TdComponent, actions) =>
    rows.map((row, index) => (
      <TrComponent key={`row-${index + 0}`}>
        {columns.map(({ key, label, format }, index) => (
          <TdComponent key={key + label} data-label={`${label}`}>
            {key ? getFieldValue({ fields: row, path: key, format }) : format()}
          </TdComponent>
        ))}
        {Object.entries(actions).length >= 1 && (
          <>
            <TdComponent key="actions" hideSm>
              <TableActions row={row} {...actions} />
            </TdComponent>
          </>
        )}
      </TrComponent>
    ));

  const renderTbodyNoContent = (columns, TrComponent, TdComponent) => (
    <TrComponent>
      <TdComponent colSpan={columns.length}>Nenhum dado encontrado</TdComponent>
    </TrComponent>
  );

  const renderTbodyLoadingContent = (
    columns,
    preLoadRows,
    TrComponent,
    TdComponent,
    ContentLoaderComponent
  ) => {
    const items = [];

    do {
      items.push(<ContentLoaderComponent />);
    } while (items.length < preLoadRows);

    return (
      <>
        {items.map((item, index) => (
          <TrComponent key={`td-${index + 0}`}>
            {columns.map(({ key }) => (
              <TdComponent key={key}>{item}</TdComponent>
            ))}
          </TrComponent>
        ))}
      </>
    );
  };

  return {
    renderThead,
    renderTbody,
    renderTbodyNoContent,
    renderTbodyLoadingContent,
  };
};

export default useTable;
