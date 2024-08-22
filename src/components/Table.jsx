

const Table = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            <label className="font-bold">
                                   #
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Money Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <label className="font-bold">
                                   1
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={"https://i.ibb.co/0G1BfzS/rafaul.jpg"}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Rafaul Goni Ansari</div>
                                        <div className="text-sm opacity-50 text-[#ff1111]">Collect Money</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Chunarughat, Habiganj
                                <br />
                                <span className="badge badge-ghost badge-sm">Bangladesh</span>
                            </td>
                            <td className="text-[#ff1111]">6,000K</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>
                                <label className="font-bold">
                                   2
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={"https://i.ibb.co/d5H4zDZ/Whats-App-Image-2024-08-22-at-11-12-09-PM.jpg"}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Arman Ali</div>
                                        <div className="text-sm opacity-50 text-[#ff1111]">Collect Money</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Chunarughat, Habiganj
                                <br />
                                <span className="badge badge-ghost badge-sm">Bangladesh</span>
                            </td>
                            <td className="text-[#ff1111]">3,000K</td>
                        </tr>

                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Total Money</th>
                            <th>9,000K</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Table;