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
  setOrder
}) {
  const { darkMode } = useTheme();

  return (
    <div className={`flex gap-4 mb-6 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <Input
        id='search'
        placeholder="Search tickets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-sm"
      />

      <Select value={statusFilter} onValueChange={setStatusFilter}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="open">Open</SelectItem>
          <SelectItem value="in_progres">In Progress</SelectItem>
          <SelectItem value="closed">Closed</SelectItem>
        </SelectContent>
      </Select>

      <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by difficulty" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Dificult</SelectItem>
          <SelectItem value="facil">Facil</SelectItem>
          <SelectItem value="medio">Medio</SelectItem>
          <SelectItem value="dificil">Dificil</SelectItem>
        </SelectContent>
      </Select>

      <Select value={order} onValueChange={setOrder}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort order" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ASC">ASC</SelectItem>
          <SelectItem value="DESC">DESC</SelectItem>
        </SelectContent>
      </Select>

      <CreateDialog />
    </div>
  );
}

export default FilterBar;
