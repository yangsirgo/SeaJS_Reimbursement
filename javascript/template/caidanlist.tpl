    {{if data_list.length>0}}{{each data_list as item Index}}
    <li class="true ex">
        <a href="javascript:void(0)" class="fz20 left-header first_A"><i class="pic pic_14"></i>{{item.name}}</a>
        <ul class="menu-ul-ul">
            {{each item.items as son_item son_Index}}
            <li
                    {{if son_Index==0}}
                    class="first-li"
                    {{else if son_Index==3}}
                    class="last-li"
                    {{/if}}><span
                {{if son_Index==0}}
                class="button top_docu switch"
                {{else if son_Index==3}}
                class="button bottom_docu switch"
                {{else}}
                class="button center_docu switch"
                {{/if}}
            ></span><a
                {{if son_Index==0}}
                class="true"
                {{else}}
                class="false"
                {{/if}} href={{son_item.pageUrl}}>{{son_item.name}}</a>
    </li>
    {{/each}}
    </ul>
    </li>
    {{/each}}{{/if}}