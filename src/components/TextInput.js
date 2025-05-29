'use client';

export default function TextInput(props) {
  return (
    <div className="h-9 text-input w-full">
      <input className="text-gray-950" type={'text'} {...props} />
    </div>
  );
}
