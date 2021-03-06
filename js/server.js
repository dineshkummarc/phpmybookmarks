/*
phpmybookmarks
Copyright (C) 2013  Jacob Zelek <jacob@jacobzelek.com>

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
*/

function Server() {}

Server.send_request = function(callback, data)
{
	jQuery.ajax("ajax.php", { dataType: 'json', data: data, type: 'POST' })
	.done(function(response)
	{
		if(response.success)
		{
			callback(response.data);
		}
		else
		{
			Display.error(response.reason_readable);
		}
	})
	.fail(function()
	{
		Display.error("Server unreachable. " +
					"Possibly a network failure.");
	});
}