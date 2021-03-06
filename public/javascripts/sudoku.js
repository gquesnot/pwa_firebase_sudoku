"use strict"


let tab = [[4, '.', '.', '.', '.', 8, '.', '.', 3],['.', '.', '.', '.', 7, '.', '.', '.', 9],['.', '.', '.', '.', 1, 6, '.', '.', '.'],[9, '.', '.', 3, '.', '.', '.', '.', '.'],['.', 6, '.', '.', '.', '.', 1, 7, '.'],['.', '.', '.', '.', '.', '.', '.', '.', '.'],['.', '.', '.', '.', '.', '.', '.', '.', 4],['.', '.', '.', 2, '.', '.', '.', '.', '.'],['.', 7, 5, '.', '.', '.', 6, '.', '.']];




function parseTab()
{
	let tab = new Array(9);
	let i = 0;
	let j = 0;
	let n = 0;
	let tmp = document.querySelectorAll("td");

	while (i < 9)
	{

		tab[i] = new Array(9);
		while (j < 9)
		{
			if (tmp[n].innerHTML !== '<br>')
				tab[i][j] = parseInt(tmp[n].innerHTML);
			else
				tab[i][j] = '.';
			j++;
			n++;
		}
		j = 0;	
		i++;
	}
	return (tab);
}


function showInTab(tab)
{
	let tmp = document.querySelectorAll("td");
	let j = 0;
	let i = 0;
	let n = 81;

	while (j < 9)
	{
		while (i < 9)
		{
			if (tmp[n - 81].innerHTML !== '<br>')
				tmp[n].classList.add("jaune");
			if(!isNaN(tab[j][i]))
			tmp[n].innerHTML = tab[j][i];
			i++;
			n++;
		}
		j++;
		i = 0;
	}
}


function clean_sudoku()
{
	let tmp = document.querySelectorAll("td");
	let i= 0;
	let tmp_class;
	while (i < tmp.length)
	{	
		if (tmp[i].classList)
			tmp[i].classList= null;
		tmp[i].innerHTML = "<br>";
		i++;
	}	
}


function sudoku()
{
	
	let tab2 = parseTab();
	

	
	if (is_valid(tab2))
	{	
		let tab3 = tab2;
		resolve(tab2, 0);
		resolve_reverse(tab3, 80);
		console.log(tab2);
		console.log(tab3);
		if (!sudoku_diff(tab2, tab3))
			alert("sudoku non valide: plusieur solution");
		if(!is_valid(tab2))
			alert("erreur resultat non valide");
		showInTab(tab2);
	}
	else
		alert("Sudoku invalide");
}



/*function show_sudoku(tab)
{
let i = 0;
let j= 0;
document.write("<br/><br/>")
while (j < tab.length)
{
	i = 0;
	while (i < tab[j].length)
	{
		document.write(tab[j][i]+" ");
		i++;
	}
	document.write("<br/>");
	j++;
}
}*/


function check_square(number, y, x, tab)
{
	let i = 0;
	let j = 0;
	while (j <  3)
	{
		while (i < 3)
		{
			if(tab[(y - y%3)+j][(x - x%3)+i]=== number &&  (y-y%3) + j !== y && (x-x%3) + i!== x)
				return false;
			i++;
		}
		i = 0;
		j++;

	}
	return true;
}





function is_safe(number, y, x, tab)
{
	let i = 0;


	while (i < 9)
	{
		if (tab[y][i] === number && i !== x)
			return false;
		i++;
	}
	i = 0;
	while (i <  9)
	{
		if (tab[i][x] === number && y !== i)
			return false;
		i++;
	}
	return check_square(number, y, x, tab);

}



function resolve(tab, index)
{
	let i = 1;

	
	if (index <= 80 && tab[Math.floor(index/9)][index%9] !== '.')
		{
			return resolve(tab, index + 1);
	}
	if (index >= 81)
		return true;
	while (i <= 9)
	{
		if (is_safe(i, Math.floor(index/9), index%9, tab))
		{	
			
			tab[Math.floor(index/9)][index%9]=i;
			if (resolve(tab, index+1))
				return  true;
		}
		i++;
	}
	tab[Math.floor(index/9)][index%9] = '.';
	return false;
}


function resolve_reverse(tab, index)
{
	let i = 9;


	if (index > 0 && tab[Math.floor(index/9)][index%9] !== '.')
	{
		return resolve_reverse(tab, index - 1);
	}
	if (index === 0)
		return true;
	while (i >= 0)
	{
		if (is_safe(i, Math.floor(index/9), index%9, tab))
		{
			tab[Math.floor(index/9)][index%9]=i;
			if (resolve_reverse(tab, index - 1))
				return  true;
		}


		i--;
	}
	tab[Math.floor(index/9)][index%9] = '.';
	return false;
}



function is_valid(tab)
{
	let i = 0;
	let j = 0;

	while (j < 9)
	{
		while (i < 9)
		{
			if (tab[j][i] !== '.')
				if (!is_safe(tab[j][i], j , i , tab))
					return false;
			i++;
		}
		i = 0;
		j++;
	}
	return true;
}


function sudoku_diff(tab, tab2)
{
	let i = 0;
	let j = 0;
	while (j < 9)
	{
		while (i < 9)
		{
			if (tab[j][i] !== tab2[j][i])
				return false
			i++;
		}
		i = 0;
		j++;
	}
	return true;
}

