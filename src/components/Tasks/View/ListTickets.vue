<template>
      <table style="width: 100%;" id="customers"  >
    <thead>
        <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="example" rowspan="1" colspan="1" style="width: 144.2px;" aria-label="Name: activate to sort column descending" aria-sort="ascending">Name</th><th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" style="width: 223.2px;" aria-label="Position: activate to sort column ascending">Position</th><th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" style="width: 103.2px;" aria-label="Office: activate to sort column ascending">Office</th><th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" style="width: 47.2px;" aria-label="Age: activate to sort column ascending">Age</th><th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" style="width: 97.2px;" aria-label="Start date: activate to sort column ascending">Start date</th><th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" style="width: 78.2px;" aria-label="Salary: activate to sort column ascending">Salary</th></tr>
        </thead>
        <tbody>
        <tr role="row" class="odd">
            <td tabindex="0" class="sorting_1">Airi Satou</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>33</td>
            <td>2008/11/28</td>
            <td>$162,700</td>
        </tr><tr role="row" class="even">
            <td class="sorting_1" tabindex="0">Angelica Ramos</td>
            <td>Chief Executive Officer (CEO)</td>
            <td>London</td>
            <td>47</td>
            <td>2009/10/09</td>
            <td>$1,200,000</td>
        </tr><tr role="row" class="odd">
            <td tabindex="0" class="sorting_1">Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
        </tr><tr role="row" class="even">
            <td class="sorting_1" tabindex="0">Bradley Greer</td>
            <td>Software Engineer</td>
            <td>London</td>
            <td>41</td>
            <td>2012/10/13</td>
            <td>$132,000</td>
        </tr><tr role="row" class="odd">
            <td class="sorting_1" tabindex="0">Brenden Wagner</td>
            <td>Software Engineer</td>
            <td>San Francisco</td>
            <td>28</td>
            <td>2011/06/07</td>
            <td>$206,850</td>
        </tr><tr role="row" class="even">
            <td tabindex="0" class="sorting_1">Brielle Williamson</td>
            <td>Integration Specialist</td>
            <td>New York</td>
            <td>61</td>
            <td>2012/12/02</td>
            <td>$372,000</td>
        </tr><tr role="row" class="odd">
            <td class="sorting_1" tabindex="0">Bruno Nash</td>
            <td>Software Engineer</td>
            <td>London</td>
            <td>38</td>
            <td>2011/05/03</td>
            <td>$163,500</td>
        </tr><tr role="row" class="even">
            <td class="sorting_1" tabindex="0">Caesar Vance</td>
            <td>Pre-Sales Support</td>
            <td>New York</td>
            <td>21</td>
            <td>2011/12/12</td>
            <td>$106,450</td>
        </tr><tr role="row" class="odd">
            <td class="sorting_1" tabindex="0">Cara Stevens</td>
            <td>Sales Assistant</td>
            <td>New York</td>
            <td>46</td>
            <td>2011/12/06</td>
            <td>$145,600</td>
        </tr><tr role="row" class="even">
            <td tabindex="0" class="sorting_1">Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
        </tr></tbody>
    </table>
</template>
<script>
export default {
  name: 'ListTickets'
}
</script>
<style scoped>
   #customers {
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgb(4, 37, 109);
  color: white;
}

</style>
