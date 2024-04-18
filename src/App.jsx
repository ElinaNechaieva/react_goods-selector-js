import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

/**
1. + Save a `selectedGood` in the state (`Jam` is the default value).
1. Show the name of the selected good in the `h1.title` (`Jam is selected`).
1. Add the `has-background-success-light` class to the `tr` of the selected Good.
1. + Show the `ClearButton` button in the title only when a good is selected.
1. + `ClearButton` should clear the selection by setting an empty string to `selectedGood`.
1. + The title should show `No goods selected` when there is no selected good.
1. Each good should have an `AddButton` to select the good.
    - only 1 good can be selected at a time;
1. Don't show `AddButton` when a good is selected.
1. Show `RemoveButton` for the selected good to clear the selection.

 */
export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  let [selectedGood, setGood] = useState(goods[8]);

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            onClick={() => setGood('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

<table className="table">
        <tbody>
          {goods.map(good => {
            return (
              <>
                {good !== selectedGood ? (
                  <tr data-cy="Good">
                    <td>
                      <button
                        onClick={() => setGood(good)}
                        data-cy="AddButton"
                        type="button"
                        className="button"
                      >
                        +
                      </button>
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {good}
                    </td>
                  </tr>
                ) : (
                  <tr data-cy="Good" className="has-background-success-light">
                    <td>
                      <button
                        onClick={() => setGood('')}
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                      >
                        -
                      </button>
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {good}
                    </td>
                  </tr>
                )}
              </>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};