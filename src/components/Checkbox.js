'use client';

export function CheckboxBlueRound({}) {
  return (
    <div>
      <input type="checkbox" className={``} />
    </div>
  );
}

export function CheckboxBlueSquare({}) {
  return (
    <div>
      <input type="checkbox" className={`checkbox-blue-square`} />
    </div>
  );
}

export function CheckboxGrayRound({}) {
  return (
    <div>
      <input type="checkbox" className={`checkbox-gray-round`} />
    </div>
  );
}

export function CheckboxGraySquare({}) {
  return (
    <div>
      <input type="checkbox" className={`checkbox-gray-square`} />
    </div>
  );
}

export function CheckboxBlackRound({}) {
  return (
    <div>
      <input type="checkbox" className={`checkbox-black-round`} />
    </div>
  );
}

export function CheckboxBlackSquare({}) {
  return (
    <div>
      <input type="checkbox" className={`checkbox-black-square`} />
    </div>
  );
}

export function CheckboxWhiteRound({ labelText = '', id, name, defaultChecked = false }) {
  return (
    <div className="flex items-center gap-1">
      <input type="checkbox" className={`checkbox-white-round`} id={id} name={name} defaultChecked={defaultChecked} />
      <label className="font-normal" htmlFor={id}>
        {labelText}
      </label>
    </div>
  );
}

export function CheckboxWhiteSquare({}) {
  return (
    <div>
      <input type="checkbox" className={`checkbox-white-square`} />
    </div>
  );
}
