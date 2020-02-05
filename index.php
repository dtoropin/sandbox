<?php

function RND ($min, $max)
{
    return rand($min, $max);
}

$a = RND(1, 100);
$b = RND(1, 100);

echo '#1';
echo '<br>';
echo $a.' + '.$b.' = '.($a + $b);

echo '<br>';

echo '#2';
echo '<br>';
for ($i=1; $i<=10; $i++) {
    if ($i % 2 == 0) echo $i.' ';
    else continue;
}