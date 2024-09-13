/* eslint-disable react/prop-types */
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import CreateDialog from "./CreateDialog";
import { useTheme } from "../context/ThemeContext";

function FilterBar({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  difficultyFilter,
  setDifficultyFilter,
  order,
  setOrder,
}) {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex gap-4 mb-6 ${darkMode ? "bg-gray-900" : "bg-slate-100"}`}
    >
      <Input
        id="search"
        placeholder="Search tickets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`max-w-sm ${darkMode ? "bg-gray-800" : "bg-white"}`}
      />

      <Select value={statusFilter} onValueChange={setStatusFilter}>
        <SelectTrigger
          className={`w-[180px] ${darkMode ? "bg-gray-800" : "bg-white"}`}
        >
          <SelectValue
            className={`${darkMode ? "bg-gray-800" : "bg-white"}`}
            placeholder="Filter by status"
          />
        </SelectTrigger>
        <SelectContent className={`${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="open">Open</SelectItem>
          <SelectItem value="in_progres">In Progress</SelectItem>
          <SelectItem value="closed">Closed</SelectItem>
        </SelectContent>
      </Select>

      <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
        <SelectTrigger
          className={`w-[180px] ${darkMode ? "bg-gray-800" : "bg-white"}`}
        >
          <SelectValue
            className={`${darkMode ? "bg-gray-800" : "bg-white"}`}
            placeholder="Filter by difficulty"
          />
        </SelectTrigger>
        <SelectContent className={`${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <SelectItem value="all">All Dificult</SelectItem>
          <SelectItem value="facil">Facil</SelectItem>
          <SelectItem value="medio">Medio</SelectItem>
          <SelectItem value="dificil">Dificil</SelectItem>
        </SelectContent>
      </Select>

      <Select value={order} onValueChange={setOrder}>
        <SelectTrigger
          className={`w-[180px] ${darkMode ? "bg-gray-800" : "bg-white"}`}
        >
          <SelectValue
            className={`${darkMode ? "bg-gray-800" : "bg-white"}`}
            placeholder="Filter by difficulty"
          />
        </SelectTrigger>
        <SelectContent className={`${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <SelectItem value="ASC">ASC</SelectItem>
          <SelectItem value="DESC">DESC</SelectItem>
        </SelectContent>
      </Select>

      <CreateDialog />
    </div>
  );
}

export default FilterBar;
