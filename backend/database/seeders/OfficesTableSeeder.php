<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
class OfficesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = array_map('str_getcsv', file(storage_path('app/office-data.csv')));
        $header = array_shift($data);
        foreach ($data as $row) {
            $office = array_combine($header, $row);
            DB::table('offices')->insert($office);
        }
    }
}
