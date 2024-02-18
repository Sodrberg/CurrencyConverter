
function InputForm({ selectedValue, setSelectedValue }) {
  return (
    <div className="relative border border-black rounded overflow-hidden bg-white text-left shadow-md sm:text-sm">
      <form>
        <input
          type="number"
          className="w-full py-2 pl-3 pr-10 text-sm text-gray-900"
          placeholder="Skriv in belopp"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default InputForm;
